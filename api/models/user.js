//mongoose module geïmporteerd voor het definiëren van mongoose Schema
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
// Schema voor User in MongoDb
_id: mongoose.Schema.Types.ObjectId,
email: {
    type: String, 
    required: true ,
    unique: true, 
   
 },
password : {type: String, required: true}



});  
module.exports = mongoose.model('User', UserSchema);