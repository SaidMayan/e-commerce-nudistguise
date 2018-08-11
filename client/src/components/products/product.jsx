import React from 'react';
import { Link } from 'react-router-dom';
import "./product.css";

function Product(props) {
  const id = props.product.id;
  const category = props.category.toLocaleLowerCase();
  return (
      <div className="product-description">
      <Link to={`/categories/${category}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={props.product.img_url} width="367px" />
      <br />
      <br />
      <h3 className="brief-description">{props.product.brief_description}</h3>
      <br />
      <br />
      </Link>
      <h3 className="price">${props.product.price}</h3>
      <br />
      <br />
      </div>

  )
}

export default Product;
