
const {readReservations, writeReservations} = require('../services/reservationsService')

exports.create = async (req, res) => 
{
    try {
    const reservations = await readReservations(); 
    
    const newReservation = {
    ...req.body, 
    id: reservations.length + 1 
    }

    reservations.push(newReservation)  
    await writeReservations(reservations); 

    res.status(201).json({
        msg: "Reservation created successfully",
        data: newReservation
    })  

} catch (error) {
    res.status(500).json({ msg: "Error creating reservation"});
}
}


exports.readAll = async (req, res) => {
    try {
        const reservations = await readReservations()
    res.json({
        msg: "Rervations read successfully",
        data: reservations
    })

} catch (error) {
    res.status(500).json({ msg: "Error reading reservations"});
}
}

exports.readOne = async (req, res) => {
    try {
    const reservationId = parseInt(req.params.id) 
    const reservations = await readReservations()
    const reservation = reservations.find( r => r.id === reservationId) 

    if (!reservation) {
        return res.status(404).json({ msg: "Sorry! Reservation not found" })
    }

    res.json({
        msg: "Reservation read succesfully.",
        data: reservations
    })

} catch (error) {
    res.status(500).json({ msg: "Error reading reservation"});
}
}

exports.update = async (req, res) => {
    try{
    const reservationId  = parseInt(req.params.id)
    const reservations = await readReservations()
    const reservationIndex = reservations.findIndex(r => r.id === reservationId) 


    if (reservationIndex === -1) {
        return res.status(404).json({ msg: "Sorry! Reservation not found!" })
    }

   
    reservations[reservationIndex] = { ...reservations[reservationIndex], ...req.body }

    await writeReservations(reservations)

    res.json({
        msg: "Reservation updated",
        data: reservations[reservationIndex]
    })

} catch (error) {
    res.status(500).json({ msg: "Error updating reservation"});
}
}



exports.delete = async (req, res) => {
    try {
    const reservationId  = parseInt(req.params.id)
    const reservations = await readReservations()
    const filteredReservations = reservations.filter(r => r.id !== reservationId)

    if (reservations.length === filteredReservations.length) {
        return res.status(404).json({ msg: "Sorry! Reservation not found!" })
    }

    await writeReservations(filteredReservations) 

    res.json({ msg: "Reservation Deleted..." })

} catch (error) {
    res.status(500).json({ msg: "Error deleting reservation"});
}
}

exports.filter = async (req, res) => {
    try {
    const {hotel, reservations_status, checkin_date, checkout_date, room_type, number_of_rooms, number_of_guests} = req.query 
    
    const reservations = await readReservations()

    const filteredReservations = reservations.filter((reservation) => {
        if (hotel && reservation.hotel !== hotel) {
            return false
        }
        if (reservations_status && reservation.reservations_status !== reservations_status) {
            return false
        }
        if (checkin_date && reservation.checkin_date !== checkin_date) {
            return false
        }
        if (room_type && reservation.room_type !== room_type) {
            return false
        }
        let nor = parseInt(number_of_rooms)
        if (nor && reservation.number_of_rooms !== nor) {
            return false
        }
        if (checkout_date && reservation.checkout_date !== checkout_date) {
            return false
        } let nog = parseInt(number_of_guests)
        if (nog && reservation.number_of_guests !== nog) {
            return false
        }
        return true
    })

    if (filteredReservations.length === 0) {
        return res.status(404).json({ msg: "Sorry! We didn't find any reservations!"})
    }

    res.json({
        msg: "Reservations filtered successfully",
        data: filteredReservations
    })
} catch (error) {
    res.status(500).json({ msg: "Error filtering reservations"});
}
}


































