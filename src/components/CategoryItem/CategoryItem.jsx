import React from 'react'
import './categoryitem.styles.scss'
import {useNavigate} from 'react-router-dom'

const CategoryItem = ({category}) => {
    const {title,imageUrl,route} = category;
    const navgate = useNavigate();
    
    const navigateItem = () => navgate(route);


  return (
    <div className="category-details-container" onClick={navigateItem}>
          <div className="bg-Image" style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className="category-details-body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
    </div>
  )
}

export default CategoryItem