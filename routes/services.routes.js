const express = require('express');
const router = express.Router();
const dateMiddleware = require('../middlewares/date.middleware');


router.get('/services', dateMiddleware, (req, res) => {
    res.render('services');
});

module.exports = router;