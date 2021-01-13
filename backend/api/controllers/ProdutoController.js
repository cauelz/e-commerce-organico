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

    static async criaProduto(req, resp) {
        const novoProduto = req.body;
        try {

            const novoProdutoCriado = await database.Produtos.create(novoProduto);
            return resp.status(200).json(novoProdutoCriado);

        } catch (error) {

            return resp.status(500).json(error.message);

        }
    }

    static async atualizaProduto(req, resp) {
        const { id } = req.params;
        const novasInfos = req.body;

        try {

            await database.Produtos.update(novasInfos, {
                where: {
                    id: id
                }
            });

            const produtoAtualizado = await database.Produtos.findOne(
                {
                    where: {
                        id: Number(id)
                    }
                }
            )

            return resp.status(200).json(produtoAtualizado);

        } catch (error) {

            return resp.status(500).json(error.message);

        }
    }

    static async deletaProduto(req, resp) {
        const { id } = req.params;
        try {

            await database.Produtos.destroy({
                where: {
                    id: Number(id)
                }
            })

            return resp.status(200).json({
                mensagem: `id ${id} deletado`
            })

        } catch (error) {
            return resp.status(200).json(error.message);
        }
    }
}

module.exports = ProdutoController;