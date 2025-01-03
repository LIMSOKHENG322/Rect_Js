import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png';
import cart from '../images/cart.png';


const HomeHeader = () => {
   
      
  return (
    <div>
         {/* <!-- Start Header/Navigation --> */}
               <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

      <div class="container">
         <a class="navbar-brand" href="index.html">SOKHENG-STORE<span>.</span></a>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarsFurni">
            <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
               <li class="nav-item active">
                  <Link class="nav-link" to="/home">Home</Link>
               </li>
               <li><Link class="nav-link" to="/shop">Shop</Link></li>
               <li><Link class="nav-link" to="/aboutus">About us</Link></li>
               <li><Link class="nav-link" to="/services">Services</Link></li>
               <li><Link class="nav-link" to="/blog">Blog</Link></li>
               <li><Link class="nav-link" to="/contactus">Contact us</Link></li>
               
            </ul>

            <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
               <li><a class="nav-link" href="#"><img src={user} /></a></li>
               <li><Link class="nav-link" Link to="/cart"><img src={cart} /></Link></li>
            </ul>
         </div>
      </div>
         
               </nav>
         {/* <!-- End Header/Navigation --> */}


    </div>
  )
}

export default HomeHeader