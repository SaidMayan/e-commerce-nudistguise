const db = require('../config/connection');

function getAllCategories() {
  const querypromise = db.many(`SELECT * FROM categories;`);
  return querypromise;

}

function getProductsByCategories(id) {
  const querypromise = db.many(`
    SELECT * FROM categories
    JOIN products
    ON categories.id = products.category_id
    WHERE products.category_id = $1`, id);
  return querypromise;
}

module.exports = {
  getAllCategories,
  getProductsByCategories
}
