const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const NaoEncontrado = require('./erros/NaoEncontrado');

app.use(bodyParser.json());

const roteador = require('./rotas/produtos');
app.use('/api/produtos', roteador)

app.use((erro, req, resp, proximo) => {

    if(erro instanceof NaoEncontrado) {
        resp.status(404);
    } else {
        resp.status(400);
    }

    resp.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => console.log('A api está funcionando!'));

