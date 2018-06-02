const categoriesDb = require('../models/categories');

function getAllCategories(req, res, next) {
  console.log(res.locals.data);
  categoriesDb.getAllCategories()
  .then(data => {
    res.locals.data = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllCategories
}
