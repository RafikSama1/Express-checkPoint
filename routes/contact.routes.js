const express = require('express');
const router = express.Router();
const dateMiddleware = require('../middlewares/date.middleware');

router.get('/contact', dateMiddleware, (req, res) => {
    res.render('contact');
})
router.post('/contact', (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    console.log(`${email}\n${name}`)
})

module.exports = router;