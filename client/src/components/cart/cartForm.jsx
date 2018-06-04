import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edited: {
        id: this.props.product.c_id,
        quantity: '1'
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onEdit(this.state.edited);
    this.props.history.push('/cart');
  }

  handleChange(e) {
    const editedProduct = this.state.edited;
    editedProduct[e.target.name] = e.target.value;
    this.setState({
      edited: editedProduct
    })
  }

  render() {
    const { product } = this.props;

    const options = Array(product.stock).fill(0).map((quantity, i) => {
      return (
        <option key={i}>{i + 1}</option>
      )
    });
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <select
            name="quantity"
            value={this.state.edited.quanity}
            onChange={this.handleChange}
          >
          {options}
          </select>
        </div>
        <Link to="/cart">Cancel</Link>
        <button value="submit">Update Quantity</button>
      </form>
    )
  }
}

export default CartForm;
