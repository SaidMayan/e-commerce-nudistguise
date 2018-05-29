const db = require('../config/connection');

function getAllProducts(){
  const queryPromise = db.any(`
    SELECT products.id, products.user_id, products.img_url, products.brand, products.brief_description, products.price, products.stock, products.category_id, categories.category
    FROM products
    JOIN categories
    ON products.category_id = categories.id
    WHERE stock > 0
  `);
  return queryPromise;
}

function getOneProduct(id) {
  const queryPromise = db.one(`
    SELECT id, user_id, brand, img_url, brief_description, price, stock
    FROM products
    WHERE products.id = $1
  `, id);
  return queryPromise;
}

function getUserProducts(id) {
  const queryPromise = db.any(`
    SELECT products.id, products.user_id, products.img_url, products.brand, products.brief_description, products.price, products.stock, products.category_id, categories.category
    FROM products
    JOIN users
    ON products.user_id = users.id
    JOIN categories
    ON products.category_id = categories.id
    WHERE user_id = $1
  `, id);
}

function createProduct (product) {
  if(product.img_url === '') {
    product.img_url = '../img/product_img.jpg'
  }
  const query = db.one(`
    INSERT INTO products
    (user_id, img_url, brand, brief_description, detailed_description, size_clothing, size_num, price, stock, category_id)
    VALUES
    ($/user_id/, $/img_url/, $/brand/, $/brief_description/, $/detailed_description/, $/size_clothing/, $/size_num/, $/price/, $/stock/, $/category_id/)
    RETURNING *
  `, product);
  return query;
}

function updateProduct(product) {
  if(product.img_url === '') {
    product.img_url = '../img/product_img.jpg'
  }
  const query = db.one(`
    UPDATE products
    SET brand = $/brand/,
    brief_description = $/brief_description/,
    detailed_description = $/detailed_description/,
    size_clothing = $/size_clothing/,
    size_num = $/size_num/,
    price = $/price/,
    stock = $/stock/,
    category_id = $/category_id/
    WHERE id = $/id/
    RETURNING *
  `, product);
  return query;
}

function deleteProduct(id) {
  const query = db.none(`
    DELETE FROM products
    WHERE id = $1
  `, id);
  return query;
}

module.exports = {
  getAllProducts,
  getOneProduct,
  getUserProducts,
  createProduct,
  updateProduct,
  deleteProduct
}
