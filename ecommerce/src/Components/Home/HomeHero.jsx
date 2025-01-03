import React from 'react'
import BAshop from '../images/BAshop.png';

const HomeHero = () => {
  return (
    <div class="hero">
      <div class="container">
                  <div class="row justify-content-between">
                     <div class="col-lg-5">
                        <div class="intro-excerpt">
                           <h1>Classic Comfort <span clsas="d-block">Design Studio</span></h1>
                           <p class="mb-4">Stay with our Classic Comfort Crewneck Tee, crafted from soft, breathable cotton for all-day ease.</p>
                           <p><a href="" class="btn btn-secondary me-2">Shop Now</a><a href="#" class="btn btn-white-outline">Explore</a></p>
                        </div>
                     </div>
                     <div class="col-lg-7">
                        <div class="hero-img-wrap">
                           <img src={BAshop} class="img-fluid"/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
  )
}

export default HomeHero