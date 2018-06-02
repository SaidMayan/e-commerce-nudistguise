const cartDb = require('../models/cart');

function getCartItems(req, res, next) {
  cartDb.getCartItems(req.params.id)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function addToCart(req, res, next) {
  req.body.user_id = req.params.id;
  cartDb.addToCart(req.body)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function deleteFromCart(req, res, next) {
  cartDb.deleteFromCart(req.params.product_id)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function editCart(req, res, next) {
  req.body.user_id = req.params.id;
  cartDb.editCart(req.body)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function calculateTotal(req, res, next) {
  cartDb.calculateTotal(req.params.id)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function updateStockPostCheckout(req, res, next) {
  cartDb.updateStockPostCheckout(req.body)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getCartItems,
  addToCart,
  deleteFromCart,
  editCart,
  calculateTotal,
  updateStockPostCheckout
}
