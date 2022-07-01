import React,{useContext} from 'react'
import { CategoriesContext } from '../../context/CategoriesContext';
import CategoryPreview from '../CategoryPreview/CategoryPreview';


import './styles.scss'


function CategoriesPreview() {
    const {categoriesMap} = useContext(CategoriesContext);
  return (
    <>
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
      
    </>
  )
}

export default CategoriesPreview;