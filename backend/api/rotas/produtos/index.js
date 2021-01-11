const roteador = require('express').Router();
const TabelaProdutos = require('./TabelaProdutos');
const Produtos = require('./Produtos');

roteador.get('/', async (req, resp) => {
    const resultados = await TabelaProdutos.listar()
    resp.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (req, resp) => {
    const dadosRecebidos = req.body;
    const produtos = new Produtos(dadosRecebidos);
    await produtos.criar();
    resp.send(
        JSON.stringify(produtos)
    )
})

roteador.get('/:idProduto', async (req, resp) => {

    try {

        const id = req.params.idProduto;
        const produtos = new Produtos({id: id});
        await produtos.carregar();
        resp.send(
            JSON.stringify(produtos)
        )

    } catch (erro) {
        resp.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }


})

roteador.put('/:idProduto', async (req, resp) => {
    
    try {

        const id = req.params.idProduto;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, {id: id});
        const produtos = new Produtos(dados);
        await produtos.atualizar();
        resp.end();

    } catch(erro) {
        resp.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }

})
module.exports = roteador;