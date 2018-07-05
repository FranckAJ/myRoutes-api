const app = require('./config/express');
const routes = require('./src/api');
const ev = require('express-validation');
const logger = require('./config/logger');
app.use('/api', routes);

const port = process.env.PORT;
app.set('port', port);

/**
 * middleware errorHandler, metodo paliativo para tratamento de
 * respostas de erro do express validation na validação de shemas.
 */
app.use(function (err, req, res, next) {
    if (err instanceof ev.ValidationError) {
        return res.status(err.status).json(err);
    }

    if (process.env.NODE_ENV !== 'production') {
        return res.status(500).send(err.stack);
    } else {
        return res.status(500).json(err);
    }
});

var server = app.listen(app.get('port'), () => {
    var port = server.address().port;
    logger.log('info', 'Server running in ' + port);
});

module.exports = server;
