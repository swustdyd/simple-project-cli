import log4js from 'log4js'
import path from 'path'

log4js.configure({
    appenders: [
        {
            type: 'dateFile',
            filename: path.resolve(__dirname, '../../../logs/log'),
            alwaysIncludePattern: true,
            pattern: '-yyyy-MM-dd.log'
        }
    ]
});

const logger = log4js.getLogger('logDate');

export default logger;

