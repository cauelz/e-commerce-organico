const TabelaProdutos = require('./TabelaProdutos');
const CampoInvalido = require('../../erros/CampoInvalido');
const DadosNaoFornecidos = require('../../erros/DadosNaoFornecidos');

class Produtos {

    constructor({id, produto, quantidade, categoria, dataCriacao, dataAtualizacao, versao}) {
        this.id = id;
        this.produto = produto;
        this.quantidade = quantidade;
        this.categoria = categoria;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao = dataAtualizacao;
        this.versao = versao;
    }

    async criar () {
        this.validar();
        const resultado = await TabelaProdutos.inserir({
            produto: this.produto,
            quantidade: this.quantidade,
            categoria: this.categoria
        })

        this.id = resultado.id;
        this.dataCriacao = resultado.dataCriacao;
        this.dataAtualizacao = resultado.dataAtualizacao;
        this.versao = resultado.versao;
    }

    async carregar() {
        const encontrado = await TabelaProdutos.pegar(this.id);
        this.produto = encontrado.produto;
        this.quantidade = encontrado.quantidade;
        this.categoria = encontrado.categoria;
        this.dataCriacao = encontrado.dataCriacao;
        this.dataAtualizacao = encontrado.dataAtualizacao;
        this.versao = encontrado.versao;
    }

    async atualizar() {
        await TabelaProdutos.pegar(this.id);
        const campos = ['produto', 'quantidade', 'categoria'];
        const dadosParaAtualizar = {};

        campos.forEach( (campo) => {
            const valor = this[campo];
            if (typeof valor === 'string' || typeof valor === 'number' && valor.length) {
                dadosParaAtualizar[campo] = valor;
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new DadosNaoFornecidos();
        }

        TabelaProdutos.atualizar(this.id, dadosParaAtualizar);
    }

    remover() {
        return TabelaProdutos.remover(this.id)
    }

    validar() {
        const campos = ['produto', 'quantidade', 'categoria'];
        campos.forEach(campo => {
            const valor = this[campo];
            if (typeof valor !== 'string' || typeof valor !== 'number' || valor.length === 0) {
                throw new CampoInvalido(campo);
            }
        })
    }
}

module.exports = Produtos;