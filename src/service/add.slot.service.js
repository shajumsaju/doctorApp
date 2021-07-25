const addSlot= require("../model/addSlot");
var mongoose = require("mongoose");


class addSlotService {

 //get slots
   getAvailableSlots (startDate,zone,type,slotTime){
    //    console.log(startDate,'-------')
       if(type == 'zone'){
        return addSlot.find({"status":false,"createdDate":startDate,"zone":zone,"slotstartTime":slotTime});
       }
        else{ 
            return addSlot.find({"status":false,"createdDate":startDate});
        }
    }
    //crate slots
    createAppointement(data){
        console.log(data)
        return addSlot.create(data)
    }

    updateSlot(id,body,params){
        // console.log(data,'--------------------000000---------------------------')
        return addSlot.findByIdAndUpdate(id,body,params)
    }
}

module.exports = addSlotService;
