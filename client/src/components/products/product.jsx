import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const id = props.product.id;
  const category = props.category.toLocaleLowerCase();
  return (
    <div className="container">
    <div>
      <div className="product-description">
      <Link to={`/categories/${category}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={props.product.img_url} width="367px" />
      <h3>{props.product.brief_description}</h3>
      </Link>
      <h3>${props.product.price}</h3>
      </div>
    </div>
    </div>
  )
}

export default Product;
