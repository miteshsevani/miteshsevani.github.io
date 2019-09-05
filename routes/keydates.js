var express = require('express');
var router = express.Router();

var contentController = require('../controllers/contentController');

/* GET key dates page */
router.get('/', contentController.keydates);

module.exports = router;