var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('websiteHome')
})

router.get('/web', function (req, res) {
  res.render('websiteHome')
})

// add your routes here

module.exports = router
