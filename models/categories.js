const db = require('../config/connection');

function getAllCategories() {
  const querypromise = db.many(`SELECT * FROM categories;`);
  return querypromise;

}

module.exports = {
  getAllCategories
}
