import React from 'react';
import { Link } from 'react-router-dom';

function Category(props) {

  return(
    <Link to={`/categories/${props.category.toLocaleLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div>
        <h3>{props.category}</h3>
    </div>
    </Link>
    )
}

export default Category;
