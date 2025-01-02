import React from 'react'
import person1 from'../images/person-1.png';
import person5 from '../images/person-1.png';
import person4 from '../images/person-1.png';

const HomeTestimonial = () => {
  return (
    <div class="testimonial-section">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-7 mx-auto text-center">
                        <h2 class="section-title">Testimonials</h2>
                     </div>
                  </div>

                  <div class="row justify-content-center">
                     <div class="col-lg-12">
                        <div class="testimonial-slider-wrap text-center">

                           <div id="testimonial-nav">
                              <span class="prev" data-controls="prev"><span class="fa fa-chevron-left"></span></span>
                              <span class="next" data-controls="next"><span class="fa fa-chevron-right"></span></span>
                           </div>

                           <div class="testimonial-slider">
                              
                              <div class="item">
                                 <div class="row justify-content-center">
                                    <div class="col-lg-8 mx-auto">

                                       <div class="testimonial-block text-center">
                                          <blockquote class="mb-5">
                                             <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                          </blockquote>

                                          <div class="author-info">
                                             <div class="author-pic">
                                                <img src={person1} alt="Maria Jones" class="img-fluid"/>
                                             </div>
                                             <h3 class="font-weight-bold">Maria Jones</h3>
                                             <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                          </div>
                                       </div>

                                    </div>
                                 </div>
                              </div> 
                              {/* <!-- END item --> */}

                              <div class="item">
                                 <div class="row justify-content-center">
                                    <div class="col-lg-8 mx-auto">

                                       <div class="testimonial-block text-center">
                                          <blockquote class="mb-5">
                                             <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                          </blockquote>

                                          <div class="author-info">
                                             <div class="author-pic">
                                                <img src={person5} alt="Maryyy Houn" class="img-fluid"/>
                                             </div>
                                             <h3 class="font-weight-bold">Maryyy Houn</h3>
                                             <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                          </div>
                                       </div>

                                    </div>
                                 </div>
                              </div> 
                              {/* <!-- END item --> */}

                              <div class="item">
                                 <div class="row justify-content-center">
                                    <div class="col-lg-8 mx-auto">

                                       <div class="testimonial-block text-center">
                                          <blockquote class="mb-5">
                                             <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                                          </blockquote>

                                          <div class="author-info">
                                             <div class="author-pic">
                                                <img src={person4} alt="Jones Harry" class="img-fluid"/>
                                             </div>
                                             <h3 class="font-weight-bold">Jones Harry</h3>
                                             <span class="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                                          </div>
                                       </div>

                                    </div>
                                 </div>
                              </div> 
                              {/* <!-- END item --> */}

                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
  )
}

export default HomeTestimonial