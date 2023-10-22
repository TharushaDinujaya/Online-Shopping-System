const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    code:{type: String, required:false},
    name:{type: String, required: true},
    des1:{type: String, required: true},
    des2:{type: String, required: true},
    des3:{type: String, required: true},
    price:{type: Number, required: true},
    stock:{type: Number, required: true}
});
module.exports = mongoose.model('Item', ItemSchema);
