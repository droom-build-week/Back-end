const express = require('express');

const routes = require('./api-router');
const rootMiddleware = require('./root-middleware');

const app = express();

rootMiddleware(app);

app.use('/api', routes);

module.exports = app;