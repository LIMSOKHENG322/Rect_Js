import React from 'react'
import cross from '../images/cross.svg';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import product3 from '../images/product-3.png'

const HomeProduct = () => {
  return (
    <div class="product-section">
               <div class="container">
                  <div class="row">

                     {/* <!-- Start Column 1 --> */}
                     <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
                        <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><a href="shop.html" class="btn">Explore</a></p>
                     </div> 
                     {/* <!-- End Column 1 --> */}

                     {/* <!-- Start Column 2 --> */}
                     <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a class="product-item" href="cart.html">
                           <img src={product1} class="img-fluid product-thumbnail"/>
                           <h3 class="product-title">Nordic Chair</h3>
                           <strong class="product-price">$50.00</strong>

                           <span class="icon-cross">
                              <img src={cross} class="img-fluid"/>
                           </span>
                        </a>
                     </div> 
                     {/* <!-- End Column 2 --> */}

                     {/* <!-- Start Column 3 --> */}
                     <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a class="product-item" href="cart.html">
                           <img src={product2} class="img-fluid product-thumbnail"/>
                           <h3 class="product-title">Kruzo Aero Chair</h3>
                           <strong class="product-price">$78.00</strong>

                           <span class="icon-cross">
                              <img src="images/cross.svg" class="img-fluid"/>
                           </span>
                        </a>
                     </div>
                     {/* <!-- End Column 3 --> */}

                     {/* <!-- Start Column 4 --> */}
                     <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a class="product-item" href="cart.html">
                           <img src={product3} class="img-fluid product-thumbnail"/>
                           <h3 class="product-title">Ergonomic Chair</h3>
                           <strong class="product-price">$43.00</strong>

                           <span class="icon-cross">
                              <img src="images/cross.svg" class="img-fluid"/>
                           </span>
                        </a>
                     </div>
                     {/* <!-- End Column 4 --> */}

                  </div>
               </div>
            </div>
  )
}

export default HomeProduct