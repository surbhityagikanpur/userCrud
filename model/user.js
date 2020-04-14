const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    userName: String,
    phoneNo: Number,
    email: String,
    address: String
});

module.exports= mongoose.model('User', userSchema);