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

router.route('/:id/:productId')
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

router.route('/:id/update/:productId')
  .put(
    cartController.updateProductPostCheckout,
    resController.sendOkResponse,
    resController.sendErrorResponse
  )

module.exports = router;
