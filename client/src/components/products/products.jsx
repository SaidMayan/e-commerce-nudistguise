import React from 'react';
import Product from './product';

function Products(props) {
  let products;
  if(props.products && props.category) {
  products = props.products.filter(
      pr => pr.category_id === props.category.id)
    .map(product => {
      return (
        <Product
          key={product.id}
          product={product}
          category={product.category}
        />
      )
    });
} else if (props.viewAll && props.category) {
  products = props.viewAll.map(product => {
    return (
      <Product
        key={product.id}
        product={product}
        category={product.category}
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
