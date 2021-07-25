const mongoose = require('mongoose')
const { ObjectId, ObjectID } = require('mongodb')
const { db } = require('./slot')


const addSlotSchema =new mongoose.Schema({
    createdDate: {type:Date},
    slotstartTime :{type:String},
    slotEndTime :{type:String},
    zone  :{type:String},
    isUser :{type:Boolean,default:false},
    status:{type:Boolean,default:true}
    },{strict:true})

    module.exports= mongoose.model("addSlot",addSlotSchema,"addSlot")


