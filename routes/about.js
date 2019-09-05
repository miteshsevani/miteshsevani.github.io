var express = require('express');
var router = express.Router();

var contentController = require('../controllers/contentController');

/* GET about page */
router.get('/', contentController.about);


module.exports = router;