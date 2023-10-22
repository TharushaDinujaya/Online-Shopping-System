const User = require('../model/UserSchema')

const saveUser = (req, res) => {
    console.log(req.body);
    const userDto = new User({
        name:req.body.name,
        password:req.body.password
    });
    userDto.save().then(result => {
        res.status(201).json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}
const getUser = (req, res) =>{
    User.findOne({name:req.headers.name}).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const getAllUser = (req, res) =>{
    User.find().then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}
const deleteUser = (req, res) =>{
    User.deleteOne({name:req.headers.name}).then(result=>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(500).json(error);
    });
}


module.exports={
    saveUser,
    deleteUser,
    getAllUser,
    getUser
}