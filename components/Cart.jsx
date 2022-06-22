import React, { useRef } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();
    console.log(data)

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });

  }

  return (
    <div className="Cart__wrapper" ref={cartRef}>
      <div className="Cart__container">
        <h1 className="Cart__container-title">Cart</h1>
        {cartItems.length < 1 && (
          <div className="Cart__empty">
            <AiOutlineShopping size={250} style={{ color: 'black' }} />
            <h3>Your shopping bag is empty</h3>
            <div className="Cart__empty-button" onClick={() => setShowCart(false)}>
              <Link href="/" >
                <Button title={'Continue Shopping'}  />
              </Link>
            </div>  
          </div>
        )}

        <div className="Cart__product-container">
          <div className="Cart__product-container-header">
            <span>product</span>
            <span>quantity</span>
            <span>total</span>
          </div>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="Cart__product-container--product" key={item._id}>
                <div className="description">
                  <img src={urlFor(item?.image[0])} className="image" />
                  <div className="item-title">
                    <h5>{item.name}</h5>
                    <h4>${item.price}.00</h4>
                  </div>
                </div>
                <div className="quantity">
                  <div className="quantity--buttons">
                    <button
                      className="minus"
                      onClick={() => toggleCartItemQuanitity(item._id, 'dec')}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="num">{item.quantity}</span>
                    <button
                      className="plus"
                      onClick={() => toggleCartItemQuanitity(item._id, 'inc')}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    REMOVE
                  </button>
                </div>
                <div className="total">
                  <h3>${item.price * item.quantity}.00</h3>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="Cart__bottom">
              <div className="sum-container">
                <span>Sum:</span>
                <span>${totalPrice}.00</span>
              </div>
              <div className="btn-container">
                <button type="button" className="pay__button" onClick={handleCheckout}>
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
