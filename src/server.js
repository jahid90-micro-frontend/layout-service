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
                mode: 'atf'
            },
            {
                id: '1',
                mode: 'btf'
            },
            {
                id: '2',
                mode: 'both'
            },
            {
                id: 'footer',
                mode: 'atf'
            }
        ]
    },
    '2': {
        id: 2,
        title: 'About',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav',
                mode: 'atf'
            },
            {
                id: '1',
                mode: 'both'
            },
            {
                id: 'footer',
                mode: 'atf'
            }
        ]
    },
    '3': {
        id: 3,
        title: 'Counter',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav',
                mode: 'atf'
            },
            {
                id: '1',
                mode: 'atf'
            },
            {
                id: 'footer',
                mode: 'atf'
            }
        ]
    },
    '4': {
        id: 4,
        title: 'Todos',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav',
                mode: 'atf'
            },
            {
                id: '1',
                mode: 'atf'
            },
            {
                id: 'footer',
                mode: 'atf'
            }
        ]
    },
    '404': {
        id: 404,
        title: 'Not Found',
        layout: 'single-column-with-nav',
        slots: [
            {
                id: 'nav',
                mode: 'atf'
            },
            {
                id: '1',
                mode: 'atf'
            },
            {
                id: 'footer',
                mode: 'atf'
            }
        ]
    }
}

// Routes
app.post('/', (req, res) => {

    console.log(`request for page: ${req.body.pageId}`);

    res.json({
        page: layouts[req.body.pageId]
    });

});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`server is up and running on port: ${port}`);
});
