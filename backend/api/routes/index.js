const bodyParser = require('body-parser');
const produtos = require('./produtosRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(produtos);
}