const express = require('express');
const msgController = require('../controller/MessageController');

const router = express.Router();

/*
* POST--> SAVE  --> body
* DELETE--> DELETE --> headers
* PUT--> UPDATE --> body
* get-- FETCH --> headers
*
* */

router.post('/save', msgController.saveMessage)
router.get('/getAll', msgController.getAllMessage)
router.delete('/delete', msgController.deleteMessage)


module.exports = router;
