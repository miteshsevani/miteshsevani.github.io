var express = require('express');
var router = express.Router();

var contentController = require('../controllers/contentController');

/* GET contact page */
router.get('/', function(req, res) {
  res.render('contact',{title:'Contact Page'});
});
module.exports = router;