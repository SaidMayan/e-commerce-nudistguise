import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartForm from './cartForm';

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.onDelete(this.props.product.id);
  }

  render() {
    const { product } = this.props;


    return (
      <div className="cart">
        <div className="cart-product-info">
          <h4>{product.brand} ---- ${product.price}</h4>
          <p>{product.brief_description}</p>
          {this.props.onDelete ? (
            <div>
              <p>Quantity: x{product.quantity}</p>
              <Link className="links" to={`/cart/edit/${product.id}`}>Edit Quantity</Link>
              <button className="links" onClick={this.handleDelete}>Delete From Cart</button>
            </div>
          ) : (
            <CartForm
              onEdit={this.props.onEdit}
              product={product}
              history={this.props.history}
            />
          )}
        </div>
      </div>
    )
  }
}

export default CartItems;
