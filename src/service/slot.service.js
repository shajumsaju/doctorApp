const slot= require("../model/slot");
var mongoose = require("mongoose");


class slotService {
//create a Section
    createAppointement (params){
        return slot.create(params);
    }
    //Overall List
    getAppointement(){
        return slot.find({
            "status":true
        })
    }


   //filter By Date
   getAppointementbyDay(appointmentDate){
    return slot.find({
        "status":true ,"appoinmentDate":appointmentDate
    })
}





}
module.exports = slotService;
