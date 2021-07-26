const express = require('express')
const addSlotService= require('../service/add.slot.service')
const addSlotController = express.Router()
const mongoose = require('mongoose')
let addSlotServices = new addSlotService()
addSlotController


/*  available slots for doctor;
    slots add by doctor  */


//create the slot by doctor
.post('/', async (req, res, next) => {
    var reqBody = req.body
        const section = await addSlotServices.createAppointement(reqBody).then(function(slotServices) {
            res.status(200).send(slotServices)
        }).catch(function(err) {
            res.send({error: err})
        })    
 })



//List the slot created by doctor
.get('/', async (req, res, next) => {
    var startDate = req.query.startDate;
    startDate = new Date(startDate)
    const section = await addSlotServices.getAvailableSlots(startDate).then(function(slotServices) {
        res.status(200).send(slotServices)
    }).catch(function(err) {
        res.send({error: err})
    })    
})

 module.exports = addSlotController;



 