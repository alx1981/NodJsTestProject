const express = require('express');
const router = express.Router();

const dashboard = async (req, res) => {
  res.send('I\'m healthy');
};


router.get('/dashboard', dashboard);

router.get('/welcome', (req, res) => {
  res.send('welcome');
})

module.exports = router;