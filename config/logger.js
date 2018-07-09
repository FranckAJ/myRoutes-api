const {createLogger, format, transports, addColors} = require('winston');
const {combine, timestamp, label, printf} = format;


const defautlFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});

var transportConsole = new transports.Console({
    colorize: true,
    level: 'info',
    json: process.env.ENV != 'dev',
    stringify: true

});
var transportFileDebug = new transports.File({
    filename: 'logs/debug.log',
    json: true
});

var transportFileException = new transports.File({
    filename: 'logs/exceptions.log',
    json: false
});

var logger = createLogger({
    levels: {
        info: 0,
        warn: 1,
        error: 2,
        verbose: 3
    },
    transports: [
        transportConsole,
        transportFileDebug
    ],
    exceptionHandlers: [
        transportConsole,
        transportFileException
    ],
    exitOnError: false,
    format: combine(
        label({label: 'HOTSITE'}),
        timestamp(),
        defautlFormat
    )
});

addColors({
    info: 'green',
    warn: 'cyan',
    error: 'red',
    verbose: 'blue'
});


module.exports = logger;