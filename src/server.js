const bodyParser = require('body-parser');
const express = require('express');

// Create the server
const app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/', (req, res) => {

    res.json({
        page: {
            id: req.body.pageId,
            title: 'Home',
            layout: 'single-column-with-nav',
            slots: [
                {
                    id: 'nav'
                },
                {
                    id: '1'
                },
                {
                    id: '2'
                },
                {
                    id: 'footer'
                }
            ]
        }
    });

});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`server is up and running on port: ${port}`);
});
