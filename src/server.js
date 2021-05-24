const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// Create the server
const app = express();

// Configuration
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const layouts = {
    '1': {
        id: 1,
        title: 'Home',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav',
            },
            {
                id: '1'
            },
            {
                id: '2',
            },
            {
                id: 'footer'
            }
        ]
    },
    '2': {
        id: 2,
        title: 'About',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav'
            },
            {
                id: '1',
            },
            {
                id: 'footer'
            }
        ]
    },
    '4': {
        id: 4,
        title: 'Todos',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav'
            },
            {
                id: '1'
            },
            {
                id: 'footer'
            }
        ]
    },
    '404': {
        id: 404,
        title: 'Not Found',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav'
            },
            {
                id: '1'
            },
            {
                id: 'footer'
            }
        ]
    }
}

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
