const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/fis-123-draft', function (req, res) {
  res.render('assets/fis-123-draft')
})
router.get('/fis-155-v1', function (req, res) {
  res.render('assets/fis-155-v1')
})
router.get('/fis-256-draft', function (req, res) {
  res.render('assets/fis-256-draft')
})
router.get('/fis-260-draft', function (req, res) {
  res.render('assets/fis-260-draft')
})
router.get('/fis-366-page-1-v1', function (req, res) {
  res.render('assets/fis-366-page-1-v1')
})
router.get('/fis-366-page-2-v1', function (req, res) {
  res.render('assets/fis-366-page-2-v1')
})
router.get('/fis-366-page-3-v1', function (req, res) {
  res.render('assets/fis-366-page-3-v1')
})
router.get('/fis-366-page-4-v1', function (req, res) {
  res.render('assets/fis-366-page-4-v1')
})
router.get('/fis-366-page-5-v1', function (req, res) {
  res.render('assets/fis-366-page-5-v1')
})
router.get('/fis-366-page-6-v1', function (req, res) {
  res.render('assets/fis-366-page-6-v1')
})
router.get('/fis-366-page-7-v1', function (req, res) {
  res.render('assets/fis-366-page-7-v1')
})
router.get('/fis-375-draft', function (req, res) {
  res.render('assets/fis-375-draft')
})
router.get('/fis-387-draft', function (req, res) {
  res.render('assets/fis-387-draft')
})
router.get('/fis-410-draft', function (req, res) {
  res.render('assets/fis-410-draft')
})
router.get('/fis-454-draft', function (req, res) {
  res.render('assets/fis-454-draft')
})
router.get('/fis-459-v1', function (req, res) {
  res.render('assets/fis-459-v1')
})
router.get('/fis-506-alert-inactive-draft', function (req, res) {
  res.render('assets/fis-506-alert-inactive-draft')
})
router.get('/fis-506-alert-active-draft', function (req, res) {
  res.render('assets/fis-506-alert-active-draft')
})
router.get('/fis-506-warning-inactive-draft', function (req, res) {
  res.render('assets/fis-506-warning-inactive-draft')
})
router.get('/fis-506-warning-active-draft', function (req, res) {
  res.render('assets/fis-506-warning-active-draft')
})
router.get('/fis-506-severe-draft', function (req, res) {
  res.render('assets/fis-506-severe-draft')
})
router.get('/fis-506-removed-draft', function (req, res) {
  res.render('assets/fis-506-removed-draft')
})

module.exports = router
