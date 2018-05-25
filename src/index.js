const path =  require('path');
const readline = require('readline');
const fs = require('fs');
const childProcess = require('child_process')
const projetcStructure = require('./project-structure')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let projetcInfo = {
    author: '',
    name: '',
    version: '1.0.0',
}

/**
 * 创建项目
 * @param {*} projetcStructure 项目结构对象
 * @param {*} root 根目录
 */
const _buildProject = async function(projetcStructure, root){
    for (let i = 0; i < projetcStructure.length; i++) {
        const item = projetcStructure[i];
        const absolutePath = path.join(root, item.name);
        if(item.type === 'dir'){
            if(!fs.existsSync(absolutePath)){                
                fs.mkdirSync(absolutePath);
            }
        }else if(item.type === 'file'){
            if(fs.existsSync(absolutePath)){                
                continue;
            }
            let data = '';    
            if(item.data){
                switch(item.data.type){
                    case 'json':
                        data = JSON.stringify(item.data.value, null, 4);
                        break;
                    case 'string':
                        data = item.data.value;
                        break;
                    case 'file':   
                        data = await new Promise((resolve, reject) => {
                            const readStream = fs.createReadStream(item.data.value);
                            if(item.data.encoding !== false){
                                readStream.setEncoding('utf-8');
                            }
                            let dataList = [];
                            readStream.on('data', (chunk) => {
                                dataList.push(chunk);
                            });
                            readStream.on('end', () => {
                                let resData = '';
                                if(item.data.encoding !== false){
                                    resData = dataList.join('');
                                }else{
                                    resData = Buffer.concat(dataList);
                                }   
                                resolve(resData);
                            });
                            readStream.on('error', (err) => {
                                reject(err);
                            });
                        });
                        break;
                    default:
                        break;
                }
            }    
            fs.appendFileSync(absolutePath, data);
        }
        if(item.children && item.children.length > 0){
            await _buildProject(item.children, absolutePath);
        }
    };
}

const waitInput = async function(showString){
    return new Promise((resolve, reject) => {
        rl.question(showString, (input) => {
            resolve(input);
        })
    })
}

/**
 * init project
 */
const init = async function(){
    const currentPath = process.cwd();
    // const defalutName = currentPath.substring(currentPath.lastIndexOf('\\') + 1, currentPath.length);
    const defalutName = path.basename(currentPath);

    const name = await waitInput(`input the project name(${defalutName}): `);
    projetcInfo.name = name || defalutName;

    const author = await waitInput('input the author(someone): ');    
    projetcInfo.author = author || 'someone';

    const choose = await waitInput('start to init(y/n)?: ');    
    if(choose === 'y' || choose === ''){
        try {                    
            await _buildProject(projetcStructure.getStructure(projetcInfo.name, projetcInfo.author), currentPath);
            console.log('start to install dependencies');
            childProcess.execSync('npm install', {cwd: path.join(currentPath, 'server'), stdio: 'inherit'});
            childProcess.execSync('npm install', {cwd: path.join(currentPath, 'client'), stdio: 'inherit'});
            console.log('init success');
        } catch (error) {
            console.log(error);  
        }
    }else{
        console.log('init is stoped');
    }

    rl.close();
    process.exit();
}

module.exports = {
    init
}