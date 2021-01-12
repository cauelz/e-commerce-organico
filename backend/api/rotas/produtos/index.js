const roteador = require('express').Router();
const TabelaProdutos = require('./TabelaProdutos');
const Produtos = require('./Produtos');
const SerializadorProdutos = require('../../Serializador').SerializadorProdutos;

roteador.get('/', async (req, resp) => {
    const resultados = await TabelaProdutos.listar()
    resp.status(200);
    const serializadorProdutos = new SerializadorProdutos(
        resp.getHeader('Content-Type')
    );
    resp.send(
        serializadorProdutos.serializar(resultados)
    )
})

roteador.post('/', async (req, resp, proximo) => {

    try {

        const dadosRecebidos = req.body;
        const produtos = new Produtos(dadosRecebidos);
        await produtos.criar();
        resp.status(201);
        const serializadorProdutos = new SerializadorProdutos(
            resp.getHeader('Content-Type')
        );
        resp.send(
            serializadorProdutos.serializar(produtos)
        )

    } catch (erro) {
        proximo(erro);
    }

})

roteador.get('/:idProduto', async (req, resp, proximo) => {

    try {

        const id = req.params.idProduto;
        const produtos = new Produtos({id: id});
        await produtos.carregar();
        resp.status(200);
        const serializadorProdutos = new SerializadorProdutos(
            resp.getHeader('Content-Type')
        );
        resp.send(
            serializadorProdutos.serializar(produtos)
        )

    } catch (erro) {
        proximo(erro);
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

roteador.delete('/:idProduto', async (req, resp, proximo) => {
    
    try {

        const id = req.params.idProduto;
        const produtos = new Produtos( {id: id} );
        await produtos.carregar();
        await produtos.remover();
        resp.status(204);
        resp.end();

    } catch(erro) {
        proximo(erro);
    }
})
module.exports = roteador;