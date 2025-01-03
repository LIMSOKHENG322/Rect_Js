import React from 'react'
import whychooseus from '../images/why-choose-us-img.png';
import truck from '../images/truck.png';
import bag from '../images/bag.png';
import support from '../images/support.png';
import returnimage from '../images/return.png';


const HomeStart = () => {
  return (
    <div class="why-choose-section">
               <div class="container">
                  <div class="row justify-content-between">
                     <div class="col-lg-6">
                        <h2 class="section-title">Why Choose Us</h2>
                        <p>Take on your day with the SportFlex Performance Shirt. Designed for active lifestyles, this shirt features moisture-wicking fabric and a stretch fit to keep up with your every move.</p>

                        <div class="row my-5">
                           <div class="col-6 col-md-6">
                              <div class="feature">
                                 <div class="icon">
                                    <img src={truck} alt="Image" class="imf-fluid"/>
                                 </div>
                                 <h3>Fast &amp; Free Shipping</h3>
                                 <p>Order now for free delivery in just three working days.</p>
                              </div>
                           </div>

                           <div class="col-6 col-md-6">
                              <div class="feature">
                                 <div class="icon">
                                    <img src={bag} alt="Image" class="imf-fluid"/>
                                 </div>
                                 <h3>Easy to Shop</h3>
                                 <p>Online shopping has become increasingly popular, as it provides for ease of shopping from the comfort of your own home.</p>
                              </div>
                           </div>

                           <div class="col-6 col-md-6">
                              <div class="feature">
                                 <div class="icon">
                                    <img src={support} alt="Image" class="imf-fluid"/>
                                 </div>
                                 <h3>24/7 Support</h3>
                                 <p>our technical support team is available 24 hours a day from time on Monday to time on Friday.</p>
                              </div>
                           </div>

                           <div class="col-6 col-md-6">
                              <div class="feature">
                                 <div class="icon">
                                    <img src={returnimage} alt="Image" class="imf-fluid"/>
                                 </div>
                                 <h3>Hassle Free Returns</h3>
                                 <p>We offer hassle-free returns by covering all shipping costs making it easier for customers to make returns without worrying.</p>
                              </div>
                           </div>

                        </div>
                     </div>

                     <div class="col-lg-5">
                        <div class="img-wrap">
                           <img src={whychooseus} alt="Image" class="img-fluid"/>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
  )
}

export default HomeStart