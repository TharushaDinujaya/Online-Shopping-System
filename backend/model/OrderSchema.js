const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    code:{type: String, required: true},
    name:{type: String, required: true},
    itm:{type: String, required: true},
    units:{type: Number, required: true},
    price:{type: Number, required: true}
});
module.exports = mongoose.model('Orders', OrderSchema);
