import React, { Component } from 'react';

class ProductsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      add: {
        product_id: this.props.match.params.id,
        quantity: '1'
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e) {
  const addedProduct = this.state.add;
  addedProduct[e.target.name] = e.target.value;
  this.setState({
    add: addedProduct
  })
}

handleSubmit(e) {
  e.preventDefault();
  if(this.props.user) {
    this.props.onSubmit(this.state.add);
    this.props.history.push('/cart');
  }
  else {
    this.props.history.push('/login');
  }
}

fetchProduct() {
  fetch(`/api/products/${this.props.match.params.id}`)
  .then(resp => {
    if(!resp.ok) throw new Error('Error...');
    return resp.json();
  })
  .then(data => {
    this.setState({
      product: data.data
    })
  })
}

componentDidMount() {
  this.fetchProduct();
}

render() {

  const options = Array(this.state.product.stock).fill(0).map((quantity, i) => {
      return (
        <option key={i}>{i + 1}</option>
      )
    });

return (
      <div className="single-product">
        <div>
        <img src={this.state.product.img_url} width="367px" />
        </div>
        <div className="product-info">
          <div>
            <h1>{this.state.product.brand}</h1>
            <p>{this.state.product.brief_description}</p>
          </div>
          <div>
            <h3 className="price">Price: ${this.state.product.price}</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="quantity">Quantity:</label>
                <select
                  name="quantity"
                  value={this.state.add.quantity}
                  onChange={this.handleChange}
                >
                  {options}
                </select>
              </div>
              <button className="links" value="submit">Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    )

}
}

export default ProductsView;
