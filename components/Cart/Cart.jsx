import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import getStripe from '../../lib/getStripe';
import styles from './cart.module.scss';
import EmptyCart from './EmptyCart/EmptyCart';
import CartProduct from './CartProduct/CartProduct';
import CartBottom from './CartBottom/CartBottom';
import { useStateContext } from '../../context/StateContext';

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

    if (response.statusCode === 500) return;

    const data = await response.json();
  

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className={styles.Cart} ref={cartRef}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cart</h1>
        {cartItems.length < 1 && (
          <EmptyCart setShowCart={setShowCart} />
        )}

        <div className={styles.CartProduct}>
          <div className={styles.CartProduct__header}>
            <span>product</span>
            <span>quantity</span>
            <span>total</span>
          </div>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <CartProduct
                key={item._id}
                onRemove={onRemove}
                toggleCartItemQuanitity={toggleCartItemQuanitity}
                item={item}
              />
            ))}
          {cartItems.length >= 1 && (
            <CartBottom totalPrice={totalPrice} handleCheckout={handleCheckout}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
