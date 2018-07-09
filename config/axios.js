const axios = require('axios');

let restUrl = process.env.REST_URL;
let restTimeout = process.env.REST_TIMEOUT;

const client = axios.create({
    baseURL: restUrl,
    timeout: restTimeout
});

module.exports = client;
