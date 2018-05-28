let package = {
    "name": "demo",
    "version": "1.0.0",
    "main": "app.js",
    "scripts": {
      "c:dev": "cross-env NODE_ENV=development webpack-dev-server",
      "c:build": "cross-env NODE_ENV=production webpack",
      "c:dll": "webpack --config webpack.dll.config.js"
    },
    "dependencies": {
      "react": "^16.2.0",
      "react-dom": "^16.2.0",
    },
    "devDependencies": {
      "babel-cli": "^6.26.0",
      "babel-core": "^6.26.0",
      "babel-eslint": "^8.0.1",
      "babel-loader": "^7.1.3",
      "babel-preset-es2015": "^6.24.1",
      "babel-preset-react": "^6.24.1",
      "babel-plugin-dynamic-import-webpack": "^1.0.2",
      "clean-webpack-plugin": "^0.1.17",
      "cross-env": "^3.2.4",
      "css-loader": "^0.26.4",
      "eslint": "^4.19.1",
      "extract-text-webpack-plugin": "^4.0.0-beta.0",
      "file-loader": "^0.10.1",
      "happypack": "^5.0.0",
      "html-webpack-plugin": "^3.2.0",
      "html-webpack-include-assets-plugin": "^1.0.4",
      "node-sass": "^4.9.0",
      "postcss-loader": "^2.0.10",
      "resolve-url-loader": "^2.2.0",
      "sass-loader": "^6.0.6",
      "style-loader": "^0.13.2",
      "url-loader": "^0.5.9",
      "webpack": "^4.6.0",
      "webpack-cli": "^2.1.4",
      "webpack-dev-server": "^3.1.4"
    }
}

module.exports = {
    getPackage: function(name, author){
        package.name = name;
        package.author = author;
        return package;
    }
}
  