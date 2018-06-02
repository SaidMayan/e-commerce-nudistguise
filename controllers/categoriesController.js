const categoriesDb = require('../models/categories');

function getAllCategories(req, res, next) {
  categoriesDb.getAllCategories()
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getProductsByCategories(req, res, next) {
  categoriesDb.getProductsByCategories(req.params.id)
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllCategories,
  getProductsByCategories
}
