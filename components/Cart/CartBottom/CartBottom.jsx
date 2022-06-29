import React from 'react'
import styles from './cartbottom.module.scss'

const CartBottom = ({totalPrice, handleCheckout}) => {
  return (
    <div className={styles.CartBottom}>
    <div>
      <span>Sum:</span>
      <span>${totalPrice}.00</span>
    </div>
    <div className={styles.PayButton}>
      <button type="button" onClick={handleCheckout}>
        Pay with Stripe
      </button>
    </div>
  </div>
  )
}

export default CartBottom