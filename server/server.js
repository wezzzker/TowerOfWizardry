const express = require('express');
const mongoose = require('mongoose');
const Banner = require('./models/banner');

const bdURL = require('./DB');

const PORT = 5000;
const app = express();
app.use(express.json());

mongoose
  .connect(bdURL)
  .then(() => console.log('MONGO OK'))
  .catch((err) => console.log('DB BROKEN' + err));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log('SERVER OK');
});

app.get('/api/banner', (req, res) => {
  Banner.find().then((banners) => {
    res.status(200).json(banners);
  });
});
