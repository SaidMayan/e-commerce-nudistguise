import React from 'react';
import Category from './category';

function Categories(props) {
  const categories = props.categories.map(category => {
    return (
      <Category
        key={category.id}
        category={category.category}
      />
    )
  });

  return (
    <div>
      <h1>{categories}</h1>
    </div>


  )
}

export default Categories;
