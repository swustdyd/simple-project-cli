const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 20 });
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const config = {
    entry: {
        index: './src/app'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, '../public/dist'),
        publicPath: '/dist/'
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: '/dist/',
        host: 'localhost',
        port: 3000,
        publicPath: '/dist/',
        hot: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'happypack/loader?id=js',
                include: [path.resolve('src')],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                use: 'url-loader?limit=8192&context=client&name=./images/[name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: 'happypack/loader?id=scss'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'resolve-url-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Simple Project',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'stylesheet/[name].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            __DEV__: isDev
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            /**
             * 在这里引入 manifest 文件
             */
            manifest: require('../public/dist/dll/vendor-manifest.json')
        }),
        new HappyPack({
            id: 'js',
            threadPool: happyThreadPool,
            loaders: ['babel-loader?cacheDirectory=true']
        }),
        new HappyPack({
            id: 'scss',
            threadPool: happyThreadPool,
            loaders: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
        })
    ],
    resolve: {
        modules:[path.resolve(__dirname, 'src'), 'node_modules'],
        unsafeCache: true
    },
    cache: true,
    mode: env
};

if(!isDev){
    config.plugins.push(
        new CleanWebpackPlugin(
            'dist',
            {
                root: path.join(baseConfig.root, 'public'),
                exclude: ['dll'],
                verbose: true,
                dry: false
            }
        )
    );
}else{
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    );
}

module.exports = config;
