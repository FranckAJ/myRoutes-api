const express = require('express');
const tripController = require('../controllers/trip.controller');
const validator = require('express-validation');
const tripValidator = require('../validations/trip.validator');

var router = express.Router();


router.get('/', validator(tripValidator.trip),
    (req, res, next) => tripController.getRoutes(req, res, next));


module.exports = router;
