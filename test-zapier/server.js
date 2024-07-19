const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/proxy', (req, res) => {
    axios.post('https://hooks.zapier.com/hooks/catch/16918614/223zf5y/', req.body)
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
