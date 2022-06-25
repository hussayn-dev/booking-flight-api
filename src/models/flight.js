const flights = new Map()

let latestId = 1

const flight = {
    Id: 1,
    title: "flight to everest",
    time: "5pm",
    price: 50000,
    date: new Date('January 20, 2020'),
     status: "Active"
}

flights.set(flight.Id, flight);

function getAllFlights() {
    return Array.from(flights.values())
}

function createNewFlight(flight) {
    latestId++
    flights.set(latestId,
        Object.assign(flight, {
            status: "Active",
            flightId: latestId,
        }))
}
function deleteFlightbyId(Id) {
    return flights.delete(Id);
}

function existsFlightWithId(Id) {
    return flights.has(Id)
}



function checkFlight(Id) {
    return flights.get(Id)
}

function updateFlight(Id, updatedFlight) {
    const flight = getExistingFlight(Id);

    flights.set(Id,
        Object.assign(flight, updatedFlight))
}

module.exports = {
    getAllFlights,
    createNewFlight,
    existsFlightWithId,
    deleteFlightbyId,
    checkFlight,
    updateFlight
}