const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const { trace } = require('@jahiduls/lib-tracing');

const layouts = require('./config/layouts');

// Create the server
const app = express();

// Configuration
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/', (req, res) => {

    const response = tracedFetchPageLayout(req.body.pageId);

    console.log(`Request: {pageId: ${req.body.pageId}}`)
    console.debug(`Response: ${JSON.stringify(response)}`);

    res.json({
        page: response
    });

});

const fetchPageLayout = (pageId) => layouts[pageId];
const tracedFetchPageLayout = trace(fetchPageLayout, 'fetch-page-layout');

module.exports = app;
