const express = require('express');
const router = express.Router();
const dateMiddleware = require('../middlewares/date.middleware');


router.get('/home', dateMiddleware, (req, res) => {
    res.render('home');
});

module.exports = router;