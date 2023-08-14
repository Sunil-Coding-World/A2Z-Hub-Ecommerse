import React from 'react'
import Cart from "../features/Cart/Cart"
import NavBar from '../features/navbar/NavBar'
const CartPage = () => {
  return (
    <NavBar>
    <div className='mx-auto text-2xl bg-gray-800 text-center text-white '> Your Cart </div>
      <Cart/>
    </NavBar>
  )
}

export default CartPage;