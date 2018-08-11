import React from 'react';
import { Link } from 'react-router-dom';
import './category.css';

function Category(props) {

  return(
    <Link to={`/categories/${props.category.toLocaleLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="category-list">
        <h2>{props.category}</h2><br />
    </div>
    </Link>
    )
}

export default Category;
