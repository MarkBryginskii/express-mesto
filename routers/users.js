const router = require('express').Router();
const readFile = require('../utils/read-file.js');
const path = require('path');
const users = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (req, res) => {
  readFile(users)
    .then((data) => res.send(data));
});

router.get('/users/:id', (req, res) => {
  readFile(users)
    .then((data) => {
      const userFound = data.find(user => user._id === req.params.id);
      return userFound
    })
    .then(user => {
      if(!user) {
        return res.status(404).send({"message": "Нет пользователя с таким id"});
      }
      res.send(user);
    })
});

module.exports = router;