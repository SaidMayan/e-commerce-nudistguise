import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartForm from './cartForm';

class CartItems extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log(this.props)
    this.props.onDelete(this.props.product.c_id);
  }

  render() {
    const { product } = this.props;


    return (
      <div className="cart">
        <div className="cart-product-info">
          <img src={product.img_url} width="367px" />
          <h4>{product.brand}</h4>
          <p>{product.brief_description}</p>
          <h4>${product.price}</h4>
          {this.props.onDelete ? (
            <div>
              <p>Quantity: x{product.quantity}</p>
              <Link className="links" to={`/cart/edit/${product.c_id}`}>Edit Quantity</Link>
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
