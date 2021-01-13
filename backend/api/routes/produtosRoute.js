const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/produtos', ProdutoController.pegarProdutos);
router.get('/produtos/:id', ProdutoController.pegaUmProduto);
router.post('/produtos', ProdutoController.criaProduto);
router.put('/produtos/:id', ProdutoController.atualizaProduto);
router.delete('/produtos/:id', ProdutoController.deletaProduto);

module.exports = router;