import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../context/CategoriesContext';
import ProductCard from '../ProductCard/ProductCard';

import './styles.scss'

const Category = () => {
    const {category} = useParams();
    console.log("HER IN CAT!!, "+ category);
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])

  return (
    <div className='category-container'>
        {products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)
        }
    </div>
  )
}

export default Category