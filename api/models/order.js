//mongoose module geïmporteerd voor het definiëren van mongoose Schema
const mongoose = require('mongoose');
// Schema voor Orders in MongoDb
const orderSchema = mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,
product: 
{
    type:  mongoose.Schema.Types.ObjectId, ref:'Product', required:true},
    quantity:{type: Number, required: true},


});  
//Exporteer het model 'Order' met het gedefinieerde schema 
module.exports = mongoose.model('Order', orderSchema);
