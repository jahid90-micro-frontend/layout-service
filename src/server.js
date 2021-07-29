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

    res.json({
        page: layouts[req.body.pageId]
    });

});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`server is up and running on port: ${port}`);
});
