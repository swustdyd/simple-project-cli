const path = require('path')
const config = require('../config')

module.exports = [
    {
        name: 'client',
        type: 'dir',
        children:[
            {
                name: 'src',
                type: 'dir'
            },
            {
                name: 'package.json',
                type: 'file'
            }
        ]
    },
    {
        name: 'server',
        type: 'dir',
        children:[
            {
                name: 'src',
                type: 'dir',
                children:[
                    {
                        name: 'controller',
                        type: 'dir'
                    },
                    {
                        name: 'service',
                        type: 'dir'
                    },
                    {
                        name: 'models',
                        type: 'dir'
                    },
                    {
                        name: 'schemas',
                        type: 'dir'
                    }
                    {
                        name: 'app.js',
                        type: 'file',
                        data:{
                            type: 'file',
                            value: path.resolve(config.root, './demoFiles/server/app.js')
                        }
                    },
                    {
                        name: 'route.js',
                        type: 'file'
                    }
                ]
            },
            {
                name: 'package.json',
                type: 'file'
            },
            {
                name: '.babelrc',
                type: 'file',
                data: {
                    type: 'json',
                    value: {
                        "presets": ["flow", "es2015", "stage-0"]
                      }
                }
            },
            {
                name: '.eslintignore',
                type: 'file'
            },
            {
                name: '.eslintrc.js',
                type: 'file'
            }
        ]
    }
]