const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');
const ValorNaoSuportado = require('./erros/ValorNaoSuportado');
const formatosAceitos = require('./Serializador').formatosAceitos;

app.use(bodyParser.json());

app.use((req, resp, proximo) => {
    let formatoRequisitado = req.header('Accept');

    if (formatoRequisitado === '*/*') {
        formatoRequisitado = 'application/json';
    }

    if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
        resp.status(406);
        resp.end();
        return;
    }

    resp.setHeader('Content-Type', formatoRequisitado);
    proximo();
})

const roteador = require('./rotas/produtos');
app.use('/api/produtos', roteador)

app.use((erro, req, resp, proximo) => {

    let status = 500;

    if(erro instanceof NaoEncontrado) {
        status = 404;
    }

    if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
        status=400;
    }

    if (erro instanceof ValorNaoSuportado) {
        status = 406;
    }

    resp.status(status);

    resp.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => console.log('A api está funcionando!'));

