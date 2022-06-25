const {
    getAllFlights,
    createNewFlight,
    existsFlightWithId,
    deleteFlightbyId,
    checkFlight,
    updateFlight
} = require('../models/flight');

function getAllFlights(req, res) {
    return res.status(200).json(getAllFlights())
}

function createNewFlight(req, res) {
    const flight = req.body;

    //check for missing flight properties
    if (!flight.date ||  !flight.price|| !flight.time || !flight.title ) {
        return res.status(400).json({
            message : "Missing required flight properties"
        });
    };


    flight.date = new Date(flight.date);


 
    createNewFlight(flight);

    return res.status(201).json(flight);
}


function editFlight(req, res) {
    const flightId = Number(req.params.id)
    const updatedFlight = req.body;

    //check flight
    const flight = checkFlight(flightId);

    //check for invalid flight
    if (!existsFlightWithId(flightId)) {
        return res.status(404).json({
            error: "flight not found"
        })
    }


    if (updatedFlight.date) {
        updatedFlight.date = new Date(updatedFlight.date);

        if (isNaN(updatedFlight.date)) {
            return res.status(400).json({
                error: "Invalid flight Date"
            });
        };
    }

    //update flight by id
    updateFlight(flightId, updatedFlight)

    return res.status(201).json(flight);
}

function deleteFlight(req, res) {
    const flightId = Number(req.params.id)

    //check for invalid flight
    if (!existsFlightWithId(flightId)) {
        return res.status(404).json({
            error: "flight not found"
        })
    }

    //delete flight by id
    deleteFlightbyId(flightId)
    return res.status(200).json({
        status: "Flight deleted"
    })
}


module.exports = {
    getAllFlights,
    createNewFlight,
    editFlight,
    deleteFlight,
}
