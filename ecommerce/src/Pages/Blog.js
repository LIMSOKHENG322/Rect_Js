import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import BlogHero from '../Components/Blog/BlogHero'
import BlogSection from '../Components/Blog/BlogSection'
import BlogFooter from '../Components/Blog/BlogFooter'
import BlogTestimonial from '../Components/Blog/BlogTestimonial'

const Blog = () => {
  return (
    <div>
        <HomeHeader/>
        <BlogHero/>
        <BlogSection/>
        <BlogTestimonial/>
        <BlogFooter/>
    </div>
  )
}

export default Blog