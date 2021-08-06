const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const layouts = require('./config/layouts');

// Create the server
const app = express();

// Configuration
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/', (req, res) => {

    const response = layouts[req.body.pageId];

    console.log(`Request: {pageId: ${req.body.pageId}}`)
    console.debug(`Response: ${JSON.stringify(response)}`);

    res.json({
        page: response
    });

});

module.exports = app;
