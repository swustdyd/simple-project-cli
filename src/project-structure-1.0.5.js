const path = require('path')
const config = require('../config')
const serverPackage = require('../src/demos/1.0/server/packageOfServer')
const clientPackage = require('../src/demos/1.0/client/packageOfClient')

module.exports = {
    getStructure: function(name, author){
        return [
            {
                name: 'configs',
                type: 'dir',
                children:[
                    {
                        name: 'base.js',
                        type: 'file',
                        data: {
                            type: 'file',
                            value: path.resolve(config.root, './src/demos/1.0/configs/base.js')
                        }
                    }
                ]
            },
            {
                name: 'public',
                type: 'dir',
                children:[
                    {
                        name: 'dist',
                        type: 'dir',
                        children:[
                            {
                                name: 'dll',
                                type: 'dir'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'client',
                type: 'dir',
                children:[
                    {
                        name: 'src',
                        type: 'dir',
                        children: [
                            {
                                name: 'components',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'asyncComponent.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/asyncComponent.js')
                                        }
                                    },
                                    {
                                        name: 'menu.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/menu.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'images',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'LOGO.png',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/LOGO.png'),
                                            encoding: false
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'layout',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'footer.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/footer.js')
                                        }
                                    },
                                    {
                                        name: 'hmfLayout.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/hmfLayout.js')
                                        }
                                    },
                                    {
                                        name: 'lrLayout.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/lrLayout.js')
                                        }
                                    },
                                    {
                                        name: 'nav.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/nav.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'pages',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'about.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/about.js')
                                        }
                                    },
                                    {
                                        name: 'index.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/index.js')
                                        }
                                    },
                                    {
                                        name: 'layoutDemo.js',
                                        type: 'file',
                                        encoding: '',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/client/layoutDemo.js')
                                        }
                                    },
                                ]
                            },
                            {
                                name: 'app.js',
                                type: 'file',
                                data: {
                                    type: 'file',
                                    value: path.resolve(config.root, './src/demos/1.0/client/app.1.0.5.js')
                                }
                            },
                            {
                                name: 'app.scss',
                                type: 'file',
                                data: {
                                    type: 'file',
                                    value: path.resolve(config.root, './src/demos/1.0/client/app.1.0.5.scss')
                                }
                            },
                            {
                                name: 'util.js',
                                type: 'file',
                                data: {
                                    type: 'file',
                                    value: path.resolve(config.root, './src/demos/1.0/client/util.js')
                                }
                            },
                            {
                                name: 'index.html',
                                type: 'file',
                                data: {
                                    type: 'file',
                                    value: path.resolve(config.root, './src/demos/1.0/client/index.html')
                                }
                            }
                        ]
                    },
                    {
                        name: '.babelrc',
                        type: 'file',
                        data: {
                            type: 'json',
                            value: {
                                "presets": ["es2015", "react"],
                                "plugins": [
                                    "dynamic-import-webpack"
                                ]
                            }
                        }
                    },
                    {
                        name: 'package.json',
                        type: 'file',
                        data: {
                            type: 'json',
                            value: clientPackage.getPackage(name, author)
                        }
                    },
                    {
                        name: 'webpack.config.js',
                        type: 'file',
                        data: {
                            type: 'file',
                            value: path.resolve(config.root, './src/demos/1.0/client/webpack.config.1.0.5.js')
                        }
                    },
                    {
                        name: 'webpack.dll.config.js',
                        type: 'file',
                        data: {
                            type: 'file',
                            value: path.resolve(config.root, './src/demos/1.0/client/webpack.dll.config.js')
                        }
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
                                name: 'controllers',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'demo.js',
                                        type: 'file',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/server/demoController.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'services',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'demo.js',
                                        type: 'file',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/server/demoService.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'models',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'demo.js',
                                        type: 'file',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/server/demoModel.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'schemas',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'demo.js',
                                        type: 'file',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/server/demoSchema.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'utils',
                                type: 'dir',
                                children:[
                                    {
                                        name: 'logger.js',
                                        type: 'file',
                                        data: {
                                            type: 'file',
                                            value: path.resolve(config.root, './src/demos/1.0/server/logger.js')
                                        }
                                    }
                                ]
                            },
                            {
                                name: 'app.js',
                                type: 'file',
                                data:{
                                    type: 'file',
                                    value: path.resolve(config.root, './src/demos/1.0/server/app.js')
                                }
                            },
                            {
                                name: 'route.js',
                                type: 'file',
                                data:{
                                    type: 'file',
                                    value: path.resolve(config.root, './src/demos/1.0/server/route.js')
                                }
                            }
                        ]
                    },
                    {
                        name: 'package.json',
                        type: 'file',
                        data: {
                            type: 'json',
                            value: serverPackage.getPackage(name, author)
                        }
                    },
                    {
                        name: '.babelrc',
                        type: 'file',
                        data: {
                            type: 'json',
                            value: {
                                "presets": ["es2015", "stage-0"]
                            }
                        }
                    },
                    {
                        name: '.eslintignore',
                        type: 'file',
                        data: {
                            type: 'file',
                            value: path.resolve(config.root, './src/demos/1.0/server/.eslintignore') 
                        }
                    },
                    {
                        name: '.eslintrc.js',
                        type: 'file',
                        data: {
                            type: 'file',
                            value: path.resolve(config.root, './src/demos/1.0/server/.eslintrc.js') 
                        }
                    }
                ]
            },
            {
                name: 'README.md',
                type: 'file',
                data: {
                    type: 'file',
                    value: path.resolve(config.root, './src/demos/1.0/README.md')
                }
            }
        ]
    }
}