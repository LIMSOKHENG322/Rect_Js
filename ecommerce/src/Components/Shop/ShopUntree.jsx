import React, { useState, useEffect } from 'react'
import product3 from '../images/product-3.png';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import cross from '../images/cross.png';
import { useCart } from '../CartContext';

const Untree = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products/");
          const data = await response.json();
          setProducts(data);
        } catch (error) { console.error("Error fetching products:", error); }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div class="untree_co-section product-section before-footer-section">
        <div class="container">
            <div class="row">
              {products.map((product, index) => (
                <div key={index} class="col-12 col-md-4 col-lg-3 mb-5">
                  <a class="product-item">
                    <img src={product.image} class="img-fluid product-thumbnail" style={{width:'200px', height: '220px', objectFit: 'contain', padding: '5px'}}/>
                    <h3 class="product-title">{product.title}</h3>
                    <strong class="product-price">${product.price}</strong>

                    <span class="icon-cross">
                      <img src={cross} class="img-fluid" onClick={() => handleAddToCart(product)} />
                    </span>
                  </a>
                </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Untree