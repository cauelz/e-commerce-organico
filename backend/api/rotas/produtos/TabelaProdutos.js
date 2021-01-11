const Modelo = require('./ModeloTabelaProdutos');

module.exports = {
    listar () {
        return Modelo.findAll();
    },
    inserir (produto) {
        return Modelo.create(produto);
    },
    async pegar (id) {
        const encontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if(!encontrado) {
            throw new Error('Fornecedor não encontrado')
        }

        return encontrado;
    },
    atualizar (id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        );
    }
}