import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import ContactHero from '../Components/Contact/ContactHero'
import ContactForm from '../Components/Contact/ContactForm'
import ContactFooter from '../Components/Contact/ContactFooter'

const Contact = () => {
  return (
    <div>
        <HomeHeader/>
        <ContactHero/>
        <ContactForm/>
        <ContactFooter/>
    </div>
  )
}

export default Contact