const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/fis-123-draft', function (req, res) {
  res.render('assets/fis-123-draft')
})
router.get('/fis-256-draft', function (req, res) {
  res.render('assets/fis-256-draft')
})
router.get('/fis-260-draft', function (req, res) {
  res.render('assets/fis-260-draft')
})
router.get('/fis-410-draft', function (req, res) {
  res.render('assets/fis-410-draft')
})
router.get('/fis-454-draft', function (req, res) {
  res.render('assets/fis-454-draft')
})

module.exports = router
