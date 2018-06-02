import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartItems from './cartItems';
import Total from './Total';

function Cart(props) {
  const cartItems = props.cartItems.map(product => {
    return (
      <Switch key={product.id}>
        <Route
          exact
          path={`/cart/edit/${product.id}`}
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
    <div>
      <div className="cart-container">
        <div className="left-cart">
          <h3>Shopping Cart:</h3>
          {cartItems}
        </div>
        <div className="right-cart">
          <Total
            total={props.total}
            cartItems={props.cartItems}
            onUpdate={props.onUpdate}
          />
        </div>
      </div>
    </div>
  )
}

export default Cart;
