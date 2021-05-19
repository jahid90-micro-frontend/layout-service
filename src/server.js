const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        page: {
            id: 1,
            title: 'Home',
            layout: 'single-column-with-nav',
            slots: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                }
            ]
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`server is up and running on port: ${port}`);
});

