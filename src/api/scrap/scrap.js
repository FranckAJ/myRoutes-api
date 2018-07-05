const requestPromise = require('request-promise');
var cheerio = require('cheerio');
var Promise = require("bluebird");


exports.loadPage = function (uri) {
    const options = {
        uri: uri,
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    return new Promise((resolve, reject) => {
        return requestPromise(options)
            .then(($) => {
                resolve($);
            })
            .catch((err) => {
                reject(err);
            })
    });
};



