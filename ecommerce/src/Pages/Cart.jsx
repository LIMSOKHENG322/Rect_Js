import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import CartFooter from '../Components/Cart/CartFooter'
import CartHero from '../Components/Cart/CartHero'
import CartUntree from '../Components/Cart/CartUntree'
import HomeFooter from '../Components/Home/HomeFooter'

const Cart = () => {
  return (
    <div>
        <HomeHeader/>
        <CartHero/>
        <CartUntree/>
        <HomeFooter/>
    </div>
  )
}

export default Cart