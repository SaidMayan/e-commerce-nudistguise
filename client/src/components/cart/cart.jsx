import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartItems from './cartItems';
import Total from './Total';
import "./cart.css";

function Cart(props) {
  // console.log(props.cartItems);
  const cartItems = props.cartItems.map(product => {
    return (
      <Switch key={product.c_id}>
        <Route
          exact
          path={`/cart/edit/${product.c_id}`}
          render={({ history }) => (
            <CartItems

              onEdit={props.onEdit}
              product={product}
              history={history}
            />
          )}
        />
        <Route
          render={() => (
            <CartItems

              onDelete={props.onDelete}
              product={product}
            />
          )}
        />
      </Switch>
    )
  });


  return (
      <div className="cart-items">
          <h3 className="shopping-cart">Shopping Cart:</h3>
          <br />
          <br />
          {cartItems}
        
        <div className="cart-total">
          <Total
            total={props.total}
            cartItems={props.cartItems}
            onUpdate={props.onUpdate}
          />
        </div>
      </div>
  )
}

export default Cart;
