const router = require('express').Router();
const Card = require('../models/card.js');

router.get('/cards', (req, res) => {
  Card.find({})
    .then((data) => res.send(data))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ message: 'Ошибка на сервере' });
    })
});

router.post('/cards', (req, res) => {
  Card.create({owner: req.user._id, ...req.body })
  .then((card) => {res.status(200).send(card)})
  .catch((err) => {
    res.status(400).send({ message: `Ошибка создание карточки - ${err.message}` });
  });
});

router.delete('/cards/:id', (req, res) => {
  Card.deleteOne({ id: req.params._id})
    .then((card) => {
      res.send({ card });
      if (!card) {
        return res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      res.send(card);
    })
    .catch((err) => {
      res.status(500).send({ message: `Ошибка на сервере - ${err.message}` });
    });
});

module.exports = router;