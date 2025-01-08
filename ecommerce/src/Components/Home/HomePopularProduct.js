import React, { useState, useEffect } from 'react'
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import product3 from '../images/product-3.png';
import { Link } from 'react-router-dom';

const HomePopularProduct = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await fetch("https://fakestoreapi.com/products/");
            const data = await response.json();
            setProducts(data.slice(15, 18));
         } catch (error) { console.error("Error fetching products:", error); }
      };
      fetchProducts();
   }, []);

  return (
    <div class="popular-product">
      <div class="container">
         <div class="row">
            {products.map((product, index) =>(
               <div key={index} class="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div class="product-item-sm d-flex">
                     <div class="thumbnail">
                        <img src={product.image} alt="Image" class="img-fluid" style={{width: '100px', height: '120px', objectFit: 'contain'}} />
                     </div>
                     <div class="pt-3">
                        <h3>{product.title}</h3>
                        <p><Link to="/shop">Read More</Link></p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   </div>
  )
}

export default HomePopularProduct