import React, { Component } from 'react';

class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: []
    }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.cartItems.forEach(item => {
      const {stock, quantity, product_id, id} = item;
      const newItem = {
        stock: stock - quantity,
        product_id,
        id
      }
      // console.log(newItem);
      // debugger;
      this.props.onUpdate(newItem);
    })
  }

  render() {
    return (
      <div>
        <h3>Subtotal: ${this.props.total}</h3>
        <button onClick={this.handleClick}>Checkout</button>
      </div>
      )
  }
}

export default Total;
