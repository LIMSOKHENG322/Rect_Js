import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import ServicesHero from '../Components/Services/ServicesHero'
import ServiceWhyChoose from '../Components/Services/ServiceWhyChoose'
import ServicesProduct from '../Components/Services/ServicesProduct'
import ServicesTestimonial from '../Components/Services/ServicesTestimonial'
import ServiceFooter from '../Components/Services/ServiceFooter'


const Services = () => {
  return (
    <div>
       <HomeHeader/>
       <ServicesHero/>
       <ServiceWhyChoose/>
       <ServicesProduct/>
       <ServicesTestimonial/>
       <ServiceFooter/>
    </div>
  )
}

export default Services