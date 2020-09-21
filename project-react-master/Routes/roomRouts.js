const express = require("express");
const router = express.Router();
const db = require("../models");
const Room = require("../models/room");
const Book = require("../models/booking");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'


const path = require("path") 
const multer = require("multer") 

    

process.env.SECRET_KEY = 'secret'


//CRUD Room

//get all rooms
router.get("/allRoom", (req, res) => {
    db.Room.findAll().then(rooms => res.send(rooms));
});



//get room by id

router.get("/findRoom/:id", (req, res) => {
    db.Room.findAll({
        where: {
            id: req.params.id
        }
    }).then(room => res.send(room))
        .then(room => {
            // res.json({ status: 'room added ssucc' + '' + room.id })
            let token = jwt.sign(room.dataValues, process.env.SECRET_KEY, {
            })


            res.send(token)




        })
});

//get all rooms by type: suite

router.get("/suite", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "suite"
        }
    }).then(room => res.send(room));
});


//get all rooms by the type: VIP
router.get("/vip", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "vip"
        }
    }).then(room => res.send(room));
});


//get all rooms by the type: double
router.get("/double", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "double"
        }
    }).then(room => res.send(room));
});


//get all rooms by the type: Single
router.get("/single", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "single"
        }
    }).then(room => res.send(room));
});

//get all rooms by the type: Normal
router.get("/normal", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "normal"
        }
    }).then(room => res.send(room));
});

//post Room
router.post("/newRoom", (req, res) => {

                db.Room.create({
                    roomType: req.body.roomType,
                    lastName: req.body.lastName,
                    image: req.body.image,
                    nbRoomAvailable: req.body.nbRoomAvailable,
                    price: req.body.price,
                    bookingId:1
                })
                   
                    .catch(err => {
                        res.send('error: ' + err)
                    })

            
       
        .catch(err => {
            res.send('error: ' + err)
        })



});

//delete room
router.delete("/deleteRoom/:id", (req, res) => {
    db.Room.destroy({
        where: {
            id:req.params.id
        }
    
    }).then(() => res.send("sucess"));


});



//update Room
router.put("/updateRoom/:id", (req, res) => {
    db.Room.update({
        roomType: req.body.roomType,
        lastName: req.body.lastName,
        image: req.body.image,
        nbRoomAvailable: req.body.nbRoomAvailable,
        price: req.body.price,
        BookingId: req.body.BookingId


    },
        {
            where: { id: req.params.id }
        }
    ).then(() => res.send("Room updated successfuly"));

});


//count all type's room nbr:
router.get("/countRoom", (req, res) => {

    var nb = console.log(Room.length);
    res.send(console.log(nb));
});
//decrement nb room NORMAL available after booking 

router.get("/countRoomNormalAvailable", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "normal"
        }

    }).then(room => console.log(room.length));



        
   
        
    });
   
//decrement nb room SIUTE available after booking 

router.get("/countRoomSuiteAvailable", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "suite",
            BookingId: null
        }

    }).then(room =>


        console.log(room.length));
        





});


//decrement nb room VIP available after booking 

router.get("/countRoomVipAvailable", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "vip",
            BookingId: null
        }

    }).then(room =>


        console.log(room.length));

});

//decrement nb room DOUBLE available after booking 

router.get("/countRoomDoubleAvailable", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "double",
            BookingId: null
        }

    }).then(room =>


        console.log(room.length));

});


//decrement nb room Single available after booking 

router.get("/countRoomSingleAvailable", (req, res) => {
    db.Room.findAll({
        where: {
            roomType: "double",
            BookingId: null
        }

    }).then(room =>


        console.log(room.length));






});





var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './resort/src/upload');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, file.originalname );
    }
});
var upload = multer({storage: storage});

router.post('/upload',upload.single('file'),function(req, res, next) {
    console.log(req.file);
    if(!req.file) {
      res.status(500);
      return next(err);
    }
    res.json({ fileUrl: 'http://localhost:3000/room/upload' + req.file.filename });
    console.log(req.file.filename)
  })

module.exports = router;