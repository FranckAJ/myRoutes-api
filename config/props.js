var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

exports.getProps = () => {
    try {
        let base = path.resolve('.');
        let fileName = path.join(base, '/app.yaml');
        let contents = fs.readFileSync(fileName, 'utf8');
        let data = yaml.load(contents);
        return data;

    } catch (err) {
        console.error(err.stack || String(err));
    }
};