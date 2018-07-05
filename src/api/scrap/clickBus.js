const scrap = require('./scrap');
const props = require('../../../config/props').getProps();
const Promise = require("bluebird");

exports.getTrip = (from, to, tripDate) => {
    let uri = props.base.urls.clickBus;
    uri += from + '/' + to + '/?ida=' + tripDate;

    return new Promise((resolve, reject) => {
        scrap.loadPage(uri)
            .then(($) => {
                let contents = getContent($);
                resolve(contents);
            })
            .catch((err) => {
                reject(err);
            })
    });
};

/**
 *
 * @param $
 * @returns {Array}
 */
var getContent = function ($) {
    let list = $('.search-result-list').children('div');
    var contents = [];
    list.each(() => {
        var content = $(list).attr('data-content');
        console.log(content);
        contents.push(JSON.parse(content));
    });
    return contents;
};