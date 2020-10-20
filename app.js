const express = require('express');
const path = require('path');

const cardsRouters = require('./routers/cards');
const usersRouters = require('./routers/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouters);
app.use('/', cardsRouters);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
