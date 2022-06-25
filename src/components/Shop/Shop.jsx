import React,{useContext} from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ProductCard from '../ProductCard/ProductCard';

import './styles.scss'


function Shop() {
    const {products} = useContext(ProductsContext);
  return (
    <div className='products-container'>
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Shop