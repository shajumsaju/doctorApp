const express = require('express')
const slotService= require('../service/slot.service')
const addSlotService = require('../service/add.slot.service')
const slotController = express.Router()
var moment = require("moment");
let slotServices = new slotService()
let addSlot = new addSlotService()

slotController


/* for user add slot */

//create the section
.post('/', async (req, res, next) => { 
    //    console.log(req.body);
       var reqBody = req.body
       var createdDate =  moment(reqBody.appoinmentDate).format('YYYY-MM-DD')
       var timeZone   = reqBody.zone
       var selectedTime;
       var result ;
       let createAppoinment = new Promise((resolve,reject)=>{
          const getSlotList = addSlot.getAvailableSlots(createdDate,timeZone,'zone',reqBody.slotstartTime).then(function(isSlot){
             if(isSlot.length > 0){
                 isSlot.forEach((res)=>{
                     if(res.slotstartTime == reqBody.slotstartTime){
                        selectedTime= res
                            resolve(isSlot)
                     }
                 }) 
             }else{
                reject(res.send({'status':'slot not valid'}))
             } 
          })
       })
    //    createAppoinment.
       createAppoinment.then(()=>{
        const section = slotServices.createAppointement(req.body).then(function(slotServices) {
            result = slotServices
            res.status(200).send({'status':'successfullyCreated'})
        }).catch(function(err) {
            res.send({error: err})
        })  
       })
               
 })


//List the pa-list
.get('/', async (req, res, next) => {
    var id = req.query.id;
    const section = await slotServices.getAppointement().then(function(slotServices) {
        res.status(200).send(slotServices)
    }).catch(function(err) {
        res.send({error: err})
    })    
})


//filter by date
.get('/filter', async (req, res, next) => {
    var appoinmentDate = req.query.appoinmentDate;
    var createdDate =  moment(appoinmentDate).format('YYYY-MM-DD')
    const appoinmetDate = await slotServices.getAppointementbyDay(createdDate).then(function(slotServices) {
        res.status(200).send(slotServices)
    }).catch(function(err) {
        res.send({error: err})
    })  
   
})

 module.exports = slotController;