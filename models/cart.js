const db = require('../config/connection');

function getCartItems(user_id) {
  return db.any(`
    SELECT cart.id as c_id, cart.product_id, cart.quantity, products.id, products.brand, products.brief_description, products.price, products.img_url, products.stock
    FROM products
    JOIN cart
    ON products.id = cart.product_id
    WHERE cart.user_id = $1
    ORDER BY cart.id
    `, user_id);
}

function addToCart(product) {
  // console.log(product);
  return db.one(`
    INSERT INTO cart (user_id, product_id, quantity)
    VALUES ($/user_id/, $/product_id/, $/quantity/)
    RETURNING *
    `, product);
}

function deleteFromCart(id) {
  return db.one(`
    DELETE FROM cart
    WHERE id = $1
    RETURNING *
  `, id)
}

function editCart(product) {
  return db.one(`
    UPDATE cart
    SET quantity = $/quantity/
    WHERE id = $/id/
    AND user_id = $/user_id/
    RETURNING *
  `, product);
}

function calculateTotal(id) {
  return db.any(`
    SELECT SUM(products.price * cart.quantity)
    FROM products
    JOIN cart
    ON products.id = cart.product_id
    WHERE cart.user_id = $1
  `, id);
}

function updateProductPostCheckout(product) {
  // console.log(product);
  return db.one(`
    UPDATE products
    SET stock = $/stock/
    WHERE id = $/product_id/
    RETURNING *
  `, product);
}

module.exports = {
  getCartItems,
  addToCart,
  editCart,
  deleteFromCart,
  calculateTotal,
  updateProductPostCheckout
}

