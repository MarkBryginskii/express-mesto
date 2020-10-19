const router = require('express').Router();
const readFile = require('../utils/read-file.js');
const path = require('path');
const users = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  readFile(users)
    .then((data) => res.send(data));
});

module.exports = router;