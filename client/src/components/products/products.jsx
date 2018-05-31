import React from 'react';
import Product from './product';

function Products(props) {
  let products;
  if(props.products) {
    products = props.products.map(product => {
      return (
      <Product
        key={product.id}
        product={product}
      />
      )
    });
} else if (props.viewAll) {
  products = props.viewAll.map(product => {
    return (
      <Product
        key={product.id}
        product={product}
      />
    )
  })
}

return(
  <div>
  {products}
  </div>
  )
}

export default Products;
