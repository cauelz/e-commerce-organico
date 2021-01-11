const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

const roteador = require('./rotas/produtos');
app.use('/api/produtos', roteador)

app.listen(config.get('api.porta'), () => console.log('A api está funcionando!'));

