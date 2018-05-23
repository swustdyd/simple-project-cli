const path =  require('path');
const readline = require('readline');
const fs = require('fs');
const serverPackageJson = require('./server-package')
const projetcStructure = require('./project-structure')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let projetcInfo = {
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
        console.log(`create the ${absolutePath}`);
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
                        data = JSON.stringify(item.data.value, null, 2);
                        break;
                    case 'string':
                        data = item.data.value;
                        break;
                    case 'file':
                        data = await new Promise((resolve, reject) => {
                            const readStream = fs.createReadStream(item.data.value, {encoding: 'utf-8'});
                            let readData = '';
                            readStream.on('data', (chunk) => {
                                readData += chunk;
                            });
                            readStream.on('end', () => {
                                resolve(readData);
                            });
                        });
                        break;
                    default:
                        break;
                }
            }
            fs.appendFileSync(absolutePath, data, item.encoding || 'utf-8');
        }
        if(item.children && item.children.length > 0){
            await _buildProject(item.children, absolutePath);
        }
    };
}

/**
 * init project
 */
const init = function(){
    const currentPath = process.cwd();
    const defalutName = currentPath.substring(currentPath.lastIndexOf('\\') + 1, currentPath.length);
    rl.question(`input the project name(${defalutName}): `, (name) => {
        projetcInfo.name = name || defalutName;
        rl.question('start to init(y|n): ', async (choose) => {
            if(choose === 'y' || choose === ''){
                console.log('init project...');
                try {                    
                    await _buildProject(projetcStructure, currentPath);
                } catch (error) {
                    console.log(error);
                    process.exit();
                }
                console.log('init success');
            }else{
                console.log('init is stoped');
            }            
            rl.close();
        })
    })
}

module.exports = {
    init
}