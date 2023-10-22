const express = require('express');
const itemController = require('../controller/ItemController');

const router = express.Router();

/*
* POST--> SAVE  --> body
* DELETE--> DELETE --> headers
* PUT--> UPDATE --> body
* get-- FETCH --> headers
*
* */

router.get('/get', itemController.getItem)
router.get('/load', itemController.loadItem)
router.get('/getAll', itemController.getAllItem)
router.put('/update', itemController.updateItem)
router.post('/save', itemController.saveItem)


module.exports = router;
