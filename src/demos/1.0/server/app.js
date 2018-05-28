import morgan from 'morgan'
import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import fs from 'fs'
import router from './route'
import logger from './utils/logger'
import BaseConfig from '../../configs/base'

const isDev = process.env.NODE_ENV !== 'production';
const app = express();

let serverPort = process.env.PORT || BaseConfig.serverPort;
serverPort = parseInt(serverPort, 10);

// if(BaseConfig.dbConnectString){
//     mongoose.connect(BaseConfig.dbConnectString);
// }

app.use(bodyParser());
app.use(cookieParser());
app.use(session({
    secret: 'simple-project',
    cookie: {
        maxAge: 30 * 60 * 1000
    },
    rolling: true,
    resave: true,
    saveUninitialized: false
}));

if(isDev){
    app.use(morgan('dev'));
}else{
    app.use(morgan('combined', {
        stream: fs.createWriteStream(path.resolve(BaseConfig.root, './logs/access.log'))
    }));
}

app.use(express.static(path.resolve(BaseConfig.root, './public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${BaseConfig.clientHost}:${BaseConfig.clientPort}`);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(router);

app.use((err, req, res, next) => {
    let message = err.message || err.toString();
    if(res.app.get('env') !== 'dev'){
        message =  'System error, please contact the admin';
        logger.error(err);
    }else if(err instanceof Error){
        console.log(err);
    }else{
        console.log(message);
    }
    res.status(err.status || 500);
    res.json({message: message, success: false, errorCode: err.status || 500});
    res.end();
});

app.listen(serverPort, function () {
    console.log(`Simple project(${process.env.NODE_ENV}) is running on port ${serverPort}`);
});

