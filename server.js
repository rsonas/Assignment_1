/*
    File: server.js
    Aislinn Richardson
    301146892
    Date: June 3 2023
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureExpress = require('./config/express');

const app = configureExpress();

require('./app/routes/index.server.routes')(app);

app.listen(3000);

module.exports = app;

console.log('Server running at http://localhost:3000/');