![Alt text](https://github.com/swustdyd/simple-project-cli/raw/master/src/demos/1.0/client/LOGO.png) 
# Structure Of Project
- configs
    - base.js
- client
    - node_modules
    - src
        - components
            - asyncComponent.js
            - menu.js
        - images
            - LOGO.png  
        - layout
            - footer.js
            - hmfLayout.js
            - lrLayout.js
            - nav.js
        - pages
            - about.js
            - index.js
            - layoutDemo.js
        - app.js
        - app.scss
        - index.html
        - util.js
    - .babelrc
    - package.json
    - webpack.config.js
    - webpack.dll.config.js
- logs
- public
    - dist
        - dll
- server
    - node_modules
    - src
        - controllers
            - demo.js
        - models
            - demo.js
        - schemas
            - demo.js
        - services
            - demo.js
        - utils
            - logger.js
        - app.js
        - route.js
    - .babelrc
    - .eslintignore
    - .eslintrc.js
    - package.lock.json
    - package.json
- README.md

# Usege
- run `npm install -g simple-project-cli` to install 
- run `spcli -i` to build the project
