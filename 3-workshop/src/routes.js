const homeController = require("./controllers/homeController");
const cubeController = require('./controllers/cubeController');

const express = require('express');
const router = express.Router();

/*router.get('/', homeController.index);
router.get('/about', homeController.about);*/

router.use('/', homeController);
router.use('/cube', cubeController);


module.exports = router;
