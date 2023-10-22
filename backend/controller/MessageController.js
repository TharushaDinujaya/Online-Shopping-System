const Message = require('../model/MessageSchema')

const saveMessage = (req, res) => {
    console.log(req.body);
    const messageDTo = new Message({
        name:req.body.name,
        message:req.body.message
    });
    messageDTo.save().then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}
const getAllMessage = (req, res) =>{
    Message.find().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const deleteMessage = (req, res) =>{
    Message.deleteOne({name:req.headers.name,message:req.headers.message}).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}


module.exports={
    saveMessage,
    getAllMessage,
    deleteMessage
}