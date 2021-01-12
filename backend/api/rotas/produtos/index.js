const roteador = require('express').Router();
const TabelaProdutos = require('./TabelaProdutos');
const Produtos = require('./Produtos');
const NaoEncontrado = require('../../erros/NaoEncontrado');

roteador.get('/', async (req, resp) => {
    const resultados = await TabelaProdutos.listar()
    resp.status(200);
    resp.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req, resp) => {

    try {

        const dadosRecebidos = req.body;
        const produtos = new Produtos(dadosRecebidos);
        await produtos.criar();
        resp.status(201);
        resp.send(
            JSON.stringify(produtos)
        )

    } catch (erro) {
        resp.status(400);
        resp.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }

})

roteador.get('/:idProduto', async (req, resp) => {

    try {

        const id = req.params.idProduto;
        const produtos = new Produtos({id: id});
        await produtos.carregar();
        resp.status(200);
        resp.send(
            JSON.stringify(produtos)
        )

    } catch (erro) {
        resp.status(404);
        resp.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }


})

roteador.put('/:idProduto', async (req, resp, proximo) => {
    
    try {

        const id = req.params.idProduto;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, {id: id});
        const produtos = new Produtos(dados);
        await produtos.atualizar();
        resp.status(204);
        resp.end();

    } catch(erro) {

        proximo(erro);
    }

})

roteador.delete('/:idProduto', async (req, resp) => {
    
    try {

        const id = req.params.idProduto;
        const produtos = new Produtos( {id: id} );
        await produtos.carregar();
        await produtos.remover();
        resp.status(204);
        resp.end();

    } catch(erro) {
        resp.status(404);
        resp.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})
module.exports = roteador;