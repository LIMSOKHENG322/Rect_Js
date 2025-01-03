import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import ShopHero from '../Components/Shop/ShopHero'
import ShopUntree from '../Components/Shop/ShopUntree'
import HomeFooter from '../Components/Home/HomeFooter'
import ShopFooter from '../Components/Shop/ShopFooter'


 const ShopGrid = () => {
  return (
    <div>
      <HomeHeader/>
      <ShopHero/>
      <ShopUntree/>
      <HomeFooter/>
    </div>
  )
}
export default ShopGrid