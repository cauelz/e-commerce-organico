const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/produtos', ProdutoController.pegarProdutos);

module.exports = router;