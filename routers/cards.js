const router = require('express').Router();
const readFile = require('../utils/read-file.js');
const path = require('path');
const users = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  readFile(users)
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: 'Ошибка на сервере' });
    })
});

module.exports = router;