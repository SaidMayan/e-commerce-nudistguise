const db = require('../config/connection');

function getAllCategories() {
  return db.any(`SELECT * FROM categories;`);
}

module.exports = {
  getAllCategories
}
