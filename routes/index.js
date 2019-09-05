var express = require('express');
var router = express.Router();

var contentController = require('../controllers/contentController');

/* GET home page. */
router.get('/', contentController.index);

module.exports = router;