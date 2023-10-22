const Order = require('../model/OrderSchema')

const saveOrder = (req, res) => {
    console.log(req.body);
    const orderDto = new Order({
        code:req.body.code,
        name:req.body.name,
        itm:req.body.itm,
        units:req.body.units,
        price:req.body.price
    });
    orderDto.save().then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}
const getAllOrders = (req, res) =>{
    Order.find().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const deleteOrder = (req, res) =>{
    Order.deleteOne({code:req.headers.code}).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}


module.exports={
    saveOrder,
    getAllOrders,
    deleteOrder
}