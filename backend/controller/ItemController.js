const Item = require('../model/ItemSchema')

const saveItem = (req, res) => {
    console.log(req.body);
    const itemDTo = new Item({
        code:req.body.code,
        name:req.body.name,
        des1: req.body.des1,
        des2: req.body.des2,
        des3: req.body.des3,
        price: req.body.price,
        stock: req.body.stock
    });
    itemDTo.save().then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

const getItem = (req, res) =>{
    Item.findOne({code:req.headers.code, name:req.headers.name}).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const loadItem = (req, res) =>{
    Item.findOne({code:req.headers.code}).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const getAllItem = (req, res) =>{
    Item.find().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const updateItem = (req, resp) => {

    Item.updateOne(
        {code:req.body.code},{
        name: req.body.name,
        des1: req.body.des1,
        des2: req.body.des2,
        des3: req.body.des3,
        price: req.body.price,
        stock: req.body.stock,
    }).then(result => {
        resp.status(201).json(result);
    }).catch(error => {
        resp.status(500).json(error);
    });
}

module.exports={
    getItem,
    getAllItem,
    updateItem,
    saveItem,
    loadItem
}