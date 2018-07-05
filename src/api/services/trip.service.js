const clickBus = require('./../scrap/clickBus');
var Promise = require("bluebird");


class TripService {

    getTrips(from, to, tripDate) {
        return new Promise((resolve, reject) => {
            clickBus.getTrip(from, to, tripDate)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        });
    }
}

module.exports = TripService;