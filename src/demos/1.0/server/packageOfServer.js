let package = {
    "name": "demo",
    "version": "1.0.0",
    "author": "aaron",
    "main": "app.js",
    "scripts": {
      "s:dev": "cross-env NODE_ENV=dev nodemon --ignore node_modules --ext node,js,jade --exec  babel-node src/app.js",
      "s:pro": "cross-env NODE_ENV=production nodemon --ignore node_modules --ext node,js,jade --exec babel-node src/app.js",
      "s:esl": "eslint **/*.js"
    },
    "dependencies": {
      "body-parser": "^1.18.2",
      "cookie-parser": "^1.4.3",
      "express": "^4.16.2",
      "express-session": "^1.15.6",
      "log4js": "^1.1.1",
      "moment": "^2.20.1",
      "mongoose": "^5.0.0-rc1",
      "morgan": "^1.9.0",
      "underscore": "^1.8.3"
    },
    "devDependencies": {
      "babel-cli": "^6.26.0",
      "babel-core": "^6.26.0",
      "babel-eslint": "^8.0.1",
      "babel-preset-es2015": "^6.24.1",
      "babel-preset-stage-0": "^6.24.1",
      "cross-env": "^3.2.4",
      "eslint": "^4.19.1",
      "nodemon": "^1.17.3"
    }
}

module.exports = {
    getPackage: function(name, author){
        package.name = name;
        package.author = author;
        return package;
    }
}