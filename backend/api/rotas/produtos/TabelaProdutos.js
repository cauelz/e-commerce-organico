const Modelo = require('./ModeloTabelaProdutos');
const NaoEncontrado = require('../../erros/NaoEncontrado');

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
            throw new NaoEncontrado();
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
    },
    remover (id) {
        return Modelo.destroy({
           where: { id: id } 
        })
    }
}