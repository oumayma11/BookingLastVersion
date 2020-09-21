const express = require("express");
const router = express.Router();
const db = require("../models");
const Booking = require("../models/booking");

//CRUD CLIENT
//get all bookings
router.get("/allBooking", (req, res) => {
    db.Booking.findAll().then(bookings => res.send(bookings));
});
//get Bookings by id
router.get("/findBooking/:id", (req, res) => {
    db.Booking.findAll({
        where: {
            id: req.params.id
        }
    }).then(booking => res.send(booking));
});
//post Booking
router.post("/newBooking", (req, res) => {

    db.Booking.create({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        nbChildren: req.body.nbChildren,
        nbAdults: req.body.nbAdults,
        totlaPrice: req.body.totlaPrice,
    })

        .catch(err => {
            res.send('error: ' + err)
        })






});


//update booking
router.put("/updateBooking/:id", (req, res) => {
    db.Booking.update({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        nbChildren: req.body.nbChildren,
        nbAdults: req.body.nbAdults,
        totlaPrice: req.body.totlaPrice,
    },
        {
            where: {
                id: req.params.id

            }

        }

    ).then(() => res.send("updated successfuly"));
});
//delete Booking
router.delete("/deleteBooking/:id", (req, res) => {
    db.Booking.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send("sucess"));
});
module.exports = router;