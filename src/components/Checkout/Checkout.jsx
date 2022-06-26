import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const {cartItems} = useContext(CartContext);

  return (
    <div>
        {cartItems.map((item) => (
            <div>
                <h1>{item.name}</h1>
                <span>qty: {item.quantity} </span>
                <span> price: ${item.price} </span>
                <span> X</span>
            </div>
            ))}
    </div>
  )
}

export default Checkout