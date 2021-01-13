const database = require('../models');

class ProdutoController {

    static async pegarProdutos(req, resp) {

        try {

            const todosOsProdutos = await database.Produtos.findAll();
            return resp.status(200).json(todosOsProdutos);

        } catch (error) {

            return resp.status(500).json(error.message);

        }
    }

    static async pegaUmProduto(req, resp) {
        const { id } = req.params;

        try {

            const umProduto = await database.Produtos.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )
            return resp.status(200).json(umProduto);

        } catch (error) {

            return resp.status(500).json(error.message);

        }
    }
}

module.exports = ProdutoController;