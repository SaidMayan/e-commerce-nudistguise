const router = require('express').Router();

const productsController = require('../controllers/productsController');
const resController = require('../controllers/resController')

router.route('/')
  .get(
    productsController.getAllProducts,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )
  .post(
    productsController.createProduct,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

router.route('/:id')
  .get(
    productsController.getOneProduct,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )
  .put(
    productsController.updateProduct,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )
  .delete(
    productsController.deleteProduct,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

router.route('/user/:id')
  .get(
    productsController.getUserProducts,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

  module.exports = router;
