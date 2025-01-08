import React from 'react'
import imggrid1 from '../images/img-grid-1.png';
import imggrid2 from '../images/img-grid-2.png';
import imggrid3 from '../images/img-grid-3.png';

const HomeWeHelp = () => {
  return (
    <div class="we-help-section">
    <div class="container">
       <div class="row justify-content-between">
          <div class="col-lg-7 mb-5 mb-lg-0">
             <div class="imgs-grid">
                <div class="grid grid-1"><img src={imggrid1} alt="Untree.co"/></div>
                <div class="grid grid-2"><img src={imggrid2} alt="Untree.co"/></div>
                <div class="grid grid-3"><img src={imggrid3} alt="Untree.co"/></div>
             </div>
          </div>
          <div class="col-lg-5 ps-lg-5">
             <h2 class="section-title mb-4">We Help Your Everyday Essential With Polo Brand</h2>
             <p>Make a statement with the Urban Vibe Graphic T-Shirt. Featuring bold, trend-forward designs, this shirt is made from high-quality fabric that feels as good as it looks. Pair it with jeans or joggers for effortless style.</p>

             <ul class="list-unstyled custom-list my-4">
                <li>Stay cool and stylish with our Relaxed Fit </li>
                <li>Dress it up or down for any occasion</li>
                <li>Designed for comfort, this lightweight shirt is perfect for sunny days.</li>
                <li>it’s the perfect blend of casual and polished, ideal for work or weekend outings.</li>
             </ul>
             <p><a herf="#" class="btn">Explore</a></p>
          </div>
       </div>
    </div>
 </div>
  )
}

export default HomeWeHelp