const Joi = require('joi');

module.exports = {
    trip: {
        query: {
            from: Joi.string().required(),
            to: Joi.string().required(),
            tripDate: Joi.string().required(),
        }
    }
};
