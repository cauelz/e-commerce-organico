const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/produtos', ProdutoController.pegarProdutos);
router.get('/produtos/:id', ProdutoController.pegaUmProduto);

module.exports = router;