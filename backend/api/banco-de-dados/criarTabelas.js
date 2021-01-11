const ModeloTabela = require('../rotas/produtos/ModeloTabelaProdutos');

ModeloTabela
    .sync()
    .then(() => console.log("Tabela criada com sucesso"))
    .catch(console.log)