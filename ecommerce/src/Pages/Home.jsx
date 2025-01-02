import React from 'react'
import StartHeader from '../Components/Home/HomeHeader'
import HomeHero from '../Components/Home/HomeHero'
import HomeProduct from '../Components/Home/HomeProduct'
import HomeStart from '../Components/Home/HomeWhyChoose'
import HomeWeHelp from '../Components/Home/HomeWeHelp'
import HomePopularProduct from '../Components/Home/HomePopularProduct'
import HomeTestimonial from '../Components/Home/HomeTestimonial'
import HomeBlog from '../Components/Home/HomeBlog'
import HomeFooter from '../Components/Home/HomeFooter'

const Home = () => {
  return (
    <div>
      <StartHeader/>
      <HomeHero/>
      <HomeProduct/>
      <HomeStart/>
      <HomeWeHelp/>
      <HomePopularProduct/>
      <HomeTestimonial/>
      <HomeBlog/>
      <HomeFooter/>
    </div>
  )
}

export default Home