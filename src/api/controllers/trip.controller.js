const TripService = require('./../services/trip.service');

class TripController {

    constructor() {
        this.tripService = new TripService();
    }

    getRoutes(req, res, next) {
        let from = req.query.from;
        let to = req.query.to;
        let tripDate = req.query.tripDate;

        this.tripService.getTrips(from, to, tripDate)
            .then((trips) => {
                res.json(trips);
            })
            .catch((err) => {
                console.error(err);
                next(err);
            });
    }
}

module.exports = new TripController();
