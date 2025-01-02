import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import HomeHeader from '../Components/Home/HomeHeader'
import AbiutWhyChoose from '../Components/About/AboutWhyChoose'
import AboutUntree from '../Components/About/AboutUntree'
import AboutTestimonial from '../Components/About/AboutTestimonial'
import AboutFooter from '../Components/About/AboutFooter'

const About = () => {
  return (
    <div>
        <HomeHeader/>
        <AboutHero/>
        <AbiutWhyChoose/>
        <AboutUntree/>
        <AboutTestimonial/>
        <AboutFooter/>
    </div>
  )
}

export default About