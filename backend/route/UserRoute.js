const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

/*
* POST--> SAVE  --> body
* DELETE--> DELETE --> headers
* PUT--> UPDATE --> body
* get-- FETCH --> headers
*
* */

router.post('/save', userController.saveUser)
router.get('/get', userController.getUser)
router.get('/getall', userController.getAllUser)
router.delete('/delete', userController.deleteUser)


module.exports = router;
