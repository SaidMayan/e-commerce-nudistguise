const router = require('express').Router();

const cartController = require('../controllers/cartController');
const resController = require('../controllers/resController');

router.route('/:id')
  .get(
    cartController.getCartItems,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )
  .post(
    cartController.addToCart,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

router.route('/total/:id')
  .get(
    cartController.calculateTotal,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

router.route(':id/:product_id')
  .put(
    cartController.editCart,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )
  .delete(
    cartController.deleteFromCart,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

router.route('/:id/update/:product_id')
  .put(
    cartController.updateStockPostCheckout,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

module.exports = router;
