const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { connectToDb } = require('./config/db');
const router = require('./routes/route');
require('dotenv').config();

const port = process.env.PORT || 7000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('demo app');
});

app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

connectToDb();
