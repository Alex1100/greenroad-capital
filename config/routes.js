var displayHomePage = require('../controllers/homePage').displayHomePage;
var displayAboutPage = require('../controllers/aboutPage').displayAboutPage;
var displayContactPage = require('../controllers/contactPage').displayContactPage;
var router = require('express').Router();

router.get('/home', displayHomePage());
router.get('/about', displayAboutPage());
router.get('/contact', displayContactPage());

module.exports = router;
