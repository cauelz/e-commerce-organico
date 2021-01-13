const database = require('../models');

class ProdutoController {

    static async pegarProdutos(req, resp) {

        try {

            const todosOsProdutos = await database.Produtos.findAll();
            return resp.status(200).json(todosOsProdutos);

        } catch(error) {

            return resp.status(500).json(error.message);

        }
    }
}

module.exports = ProdutoController;