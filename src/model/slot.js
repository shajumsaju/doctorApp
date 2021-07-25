const mongoose = require('mongoose')
const { ObjectId, ObjectID } = require('mongodb')


const slotschema =new mongoose.Schema({
    userName: {type:String},
    contactNumber: {type:String},
    appoinmentDate: {type:Date, default:Date.now()},
    slotstartTime :{type:String},
    slotEndTime :{type:String},
    zone  :{type:String},
    isUser :{type:Boolean,default:false},
    status:{type:Boolean}
    },{strict:true})



    


    module.exports= mongoose.model("docApp",slotschema,"docApps")