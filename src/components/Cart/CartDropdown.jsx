import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'

import './styles.scss'
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item}/>
            ))}
        </div>
        <Button onClick={() => navigate("/checkout")}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown