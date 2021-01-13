const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 5000;

app.get('/teste', (req, resp) => {
    resp.status(200);
    resp.send({mensagem: 'Oie seus goiabas!'})
})

app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
})

module.exports = app;