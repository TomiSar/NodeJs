const express = require('express');
const router = express.Router()

// @description Login/Landing page
// @route       GET /
// specify the same layout from login.hbs
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login',
    });
});

// @description Dashboard
// @route       GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router