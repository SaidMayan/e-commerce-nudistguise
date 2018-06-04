import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CartItems from './cartItems';
import Total from './Total';

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
      <div>
        <div>
          <h3>Shopping Cart:</h3>
          {cartItems}
        </div>
        <div>
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
