import React, { useState, useEffect } from 'react'
import cross from '../images/cross.png';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import product3 from '../images/product-3.png';
import { Link } from 'react-router-dom';

const HomeProduct = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch("https://fakestoreapi.com/products/");
            const data = await response.json();
            setProducts(data.slice(1, 4));
         } catch (error) { console.error("Error fetching products:", error); }
      };
      fetchProducts();
   }, []);

  return (
    <div class="product-section">
               <div class="container">
                  <div class="row">

                     {/* <!-- Start Column 1 --> */}
                     <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
                        <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                        <p><Link to="/shop" class="btn">Explore</Link></p>
                     </div> 
                     {/* <!-- End Column 1 --> */}

                     {/* <!-- Start Column 2 --> */}
                     {products.map((product, index) => (

                     <div key={index} class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                           <a class="product-item" href="cart.html">
                              <img src={product1} class="img-fluid product-thumbnail"/>
                              <h3 class="product-title">Nordic Chair</h3>
                              <strong class="product-price">$50.00</strong>

                              <span class="icon-cross">
                                 <img src={cross} class="img-fluid"/>
                              </span>
                           </a>
                     </div> 

                     ))}       

                     {/* <!-- End Column 2 --> */}

                     {/* <!-- Start Column 3 --> */}
                     {/* <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a class="product-item" href="cart.html">
                           <img src={product2} class="img-fluid product-thumbnail"/>
                           <h3 class="product-title">Kruzo Aero Chair</h3>
                           <strong class="product-price">$78.00</strong>

                           <span class="icon-cross">
                              <img src={cross} class="img-fluid"/>
                           </span>
                        </a>
                     </div> */}
                     {/* <!-- End Column 3 --> */}

                     {/* <!-- Start Column 4 --> */}
                     {/* <div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <a class="product-item" href="cart.html">
                           <img src={product3} class="img-fluid product-thumbnail"/>
                           <h3 class="product-title">Ergonomic Chair</h3>
                           <strong class="product-price">$43.00</strong>

                           <span class="icon-cross">
                              <img src={cross} class="img-fluid"/>
                           </span>
                        </a>
                     </div> */}
                     {/* <!-- End Column 4 --> */}

                  </div>
               </div>
            </div>
  )
}

export default HomeProduct