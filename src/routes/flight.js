const express = require('express');

const router = express.Router();
const flight = require('../controllers/flight');

router.get('/', flight.getAllFlights);
router.post('/', flight.createNewFlight);
router.route('/:id').patch(flight.editFlight).delete(flight.deleteFlight)

module.exports = flightsRouter;

