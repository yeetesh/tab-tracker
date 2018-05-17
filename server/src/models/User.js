const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
  email:{
    type: String,
    required: true,
    //unique : true
  },
  password:{
    type: String,
    required: true
  }
});



module.exports = mongoose.model('users', UserSchema)