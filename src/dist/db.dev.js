"use strict";

var mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true); // var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://root:root@tsserverincloud-eoo1u.mongodb.net/timeSheetServer?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://root:root@tsserverincloud-eoo1u.mongodb.net/timeSheetServer?retryWrites=true&w=majority');
const uri = "mongodb+srv://shaju:shaju@cluster0.bah2n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect('mongodb://127.0.0.1:27017'+uri);


var DB = mongoose.connection; // DB.on('error', console.error.bind(console, 'Connection error: '));

DB.once('open', function (callback) {
  //The code in this asynchronous callback block is executed after connecting to MongoDB. 
  console.log('Successfully connected to MongoDB.');
});