import React from 'react';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import {useCart} from '../CartContext';
import { Link } from 'react-router-dom'
import PayPal from '../Paypal';

const CartUntree = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Image</th>
                    <th className="product-name">Product</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center' }}>
                        Your cart is empty
                      </td>
                    </tr>
                  ) : (
                    cart.map((product) => (
                      <tr key={product.id}>
                        <td className="product-thumbnail">
                          <img src={product.image} alt="Image" className="img-fluid" style={{width: '100px', height: '120px', objectFit: 'contain', padding: '5px'}}/>
                        </td>
                        <td className="product-name">
                          <h2 className="h6 text-black">{product.title}</h2>
                        </td>
                        <td>${product.price}</td>
                        <td>
                          <div
                            className="input-group mb-3 d-flex align-items-center quantity-container"
                            style={{ maxWidth: '120px' }}
                          >
                            <div className="input-group-prepend">
                              <button className="btn btn-outline-black decrease" type="button"
                              onClick={() => product.quantity > 1 &&
                                updateCartItemQuantity(product.id, product.quantity - 1)
                              }>
                                &minus;
                              </button>
                            </div>
                            <input
                              type="text"
                              className="form-control text-center quantity-amount"
                              value={product.quantity}
                              placeholder=""
                              aria-label="Example text with button addon"
                              aria-describedby="button-addon1"
                              readOnly
                            />
                            <div className="input-group-append">
                              <button className="btn btn-outline-black increase" type="button"
                                onClick={() =>
                                  updateCartItemQuantity(product.id, product.quantity + 1)
                                }>
                                +
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>${(product.price * product.quantity).toFixed(2)}</td>
                        <td>
                          <a onClick={() => removeFromCart(product.id)} className="btn btn-black btn-sm">
                            X
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6">
                <Link to='/shop' className="btn btn-outline-black btn-sm btn-block">
                  Continue Shopping
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">
                  Coupon
                </label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control py-3"
                  id="coupon"
                  placeholder="Coupon Code"
                />
              </div>
              <div className="col-md-4">
                <button className="btn btn-black">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${subtotal}</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${subtotal}</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    {/* <button
                      className="btn btn-black btn-lg py-3 btn-block"
                      onClick={() => (window.location = '/thankyou')}
                    >
                      Proceed To Checkout
                    </button> */}
                    <PayPal
                      total={subtotal} onSuccess={() => {
                      window.location.href = '/thankyou';
                      }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUntree;
