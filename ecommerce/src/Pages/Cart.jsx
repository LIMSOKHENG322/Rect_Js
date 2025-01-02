import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import CartFooter from '../Components/Cart/CartFooter'
import CartHero from '../Components/Cart/CartHero'
import CartUntree from '../Components/Cart/CartUntree'

const Cart = () => {
  return (
    <div>
        <HomeHeader/>
        <CartHero/>
        <CartUntree/>
        <CartFooter/>
    </div>
  )
}

export default Cart