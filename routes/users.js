const express = require('express');
const router = express.Router();

const inputValidator = require('../middlewares/input-validation')

const { addSymbol } = require('../controllers/users/controller');
const { addSymbolValidator } = require('../controllers/users/validator');

//encode urls for all endpoints of this router only
//app.use(express.urlencoded({ extended: false }));

router.get('/dashboard', (req, res) => {
    res.send('dashboard');
})

router.get('/logout', (req, res) => {
    res.send('logout');
})

//this way we add url encoded only for the specific call '/symbol'
//router.post('/symbol', express.urlencoded({ extended: false }), inputValidator(addSymbolValidator), addSymbol)
router.post('/symbol', inputValidator(addSymbolValidator), addSymbol)

module.exports = router;
