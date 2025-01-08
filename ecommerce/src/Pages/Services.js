import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import ServicesHero from '../Components/Services/ServicesHero'
import ServiceWhyChoose from '../Components/Services/ServiceWhyChoose'
import ServicesProduct from '../Components/Services/ServicesProduct'
import ServicesTestimonial from '../Components/Services/ServicesTestimonial'
import ServiceFooter from '../Components/Services/ServiceFooter'
import HomeProduct from '../Components/Home/HomeProduct'
import HomeFooter from '../Components/Home/HomeFooter'


const Services = () => {
  return (
    <div>
       <HomeHeader/>
       <ServicesHero/>
       <ServiceWhyChoose/>
       <HomeProduct/>
       {/* <ServicesProduct/> */}
       <ServicesTestimonial/>
       {/* <ServiceFooter/> */}
       <HomeFooter/>
    </div>
  )
}

export default Services