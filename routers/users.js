const router = require('express').Router();
const User = require('../models/user.js');

router.get('/users', (req, res) => {
  User.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
});

router.get('/users/:id', (req, res) => {
  User.findOne({ id: req.params._id})
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(400).send({ message: 'Ошибка на сервере' });
    });
});

router.post('/users', (req, res) => {
  User.create({ ...req.body })
  .then((user) => {res.status(200).send(user)})
  .catch((err) => {
    console.error(err.message);
    res.status(400).send({ message: `Ошибка создание пользователя - ${err.message}` });
  });
});

module.exports = router;
