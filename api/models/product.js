//mongoose module geïmporteerd voor het definiëren van mongoose Schema
const mongoose = require('mongoose');
const productionSchema = mongoose.Schema({
// Schema voor Products in MongoDb
_id: mongoose.Schema.Types.ObjectId,
name: {
    type:String, required: true
},
price: {
    type:Number, required: true
},
productImage: {type:String,required: true}


});  
// Exporteer het model 'Product' met het gedefinieerde schema
module.exports = mongoose.model('Product', productionSchema);