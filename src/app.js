const agenda = require('../src/routes/router');
const express = require('express');

app = express();

app.use(express.json());
app.use('/agenda', agenda);

module.exports = app;