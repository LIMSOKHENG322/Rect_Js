import React from 'react'
import ThankYouFooter from '../Components/ThankYou/ThankYouFooter'
import ThankYouHero from '../Components/ThankYou/ThankYouHero'
import ThankYouUntree from '../Components/ThankYou/ThankYouUntree'
import HomeHeader from '../Components/Home/HomeHeader'

const ThankYou = () => {
  return (
    <div>
      <HomeHeader/>
      <ThankYouFooter/>
      <ThankYouHero/>
      <ThankYouUntree/>
    </div>
  )
}

export default ThankYou