const express = require('express');
const router = express.Router();

//validators
const {addSymbolValidator} = require('../controllers/users.validators')
const inputValidator = require('../middlewares/input-validation')

router.get('/dashboard', (req, res) => {
    res.send('dashboard');
})

router.get('/logout', (req, res) => {
    res.send('logout');
})

router.post('/symbol', inputValidator(addSymbolValidator), (req, res) => {
    res.send('add symbol');
})

module.exports = router;
