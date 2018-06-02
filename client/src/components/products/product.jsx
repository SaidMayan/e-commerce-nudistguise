import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const id = props.product.id;
  const category = props.category.toLocaleLowerCase();
  return (
    <div>
    <div>
      <div className="product-description">
      <img src={props.product.img_url} width="367px" />
      <h3>{props.product.brief_description}</h3>
      <h3>${props.product.price}</h3>
      <Link to={`/categories/${category}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <p>View More</p>
    </Link>
      </div>
    </div>
    </div>
  )
}

export default Product;
