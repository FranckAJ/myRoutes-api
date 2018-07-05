const express = require('express');
let router = express.Router();

const tripRouter = require('./routes/trip.router');

router.use('/trip', tripRouter);

module.exports = router;
