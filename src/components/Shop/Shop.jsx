import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Category from '../Category/Category';

import CategoriesPreview from '../CategoryPreview/CategoriesPreview';

import './styles.scss'


function Shop() {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=':category' element={<Category/>} />
    </Routes>
  )
}

export default Shop