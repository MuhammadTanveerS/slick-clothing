import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import categoriesData from '../categoriesData'

const Categories = () => {
  return (
    <div className="main-container">

      {categoriesData.map((c) => (
        <CategoryItem key={c.id} category={c} />
      ))}
      
    </div>
  )
}

export default Categories