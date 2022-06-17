import React from 'react'
import './categoryitem.styles.scss'

const CategoryItem = ({category}) => {
    const {title,imageUrl} = category;
  return (
    <div className="category-container">
          <div className="bg-Image" style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className="category-body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
    </div>
  )
}

export default CategoryItem