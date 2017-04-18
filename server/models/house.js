var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var houseSchema = new Schema({
  title         : {type: String, required: true},
  description   : String,
  price         : Number,
  owner         : String,
  image         : String,
  address       : String,
  location      : {
    long : Number,
    lat  : Number
  } // [long, lat]
})

var House = mongoose.model('House', houseSchema);

module.exports = House
