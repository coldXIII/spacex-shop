import React from 'react';
import styles from './cartproduct.module.scss';
import { urlFor } from '../../../lib/client';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartProduct = ({ onRemove, toggleCartItemQuanitity, item }) => {
  return (
    <div className={styles.CartProduct__item} key={item._id}>
      <div className={styles.description}>
        <img src={urlFor(item?.image[0])} className={styles.image} />
        <div className={styles.item__title}>
          <h5>{item.name}</h5>
          <h4>${item.price}.00</h4>
        </div>
      </div>
      <div className={styles.quantity}>
        <div className={styles.quantity__buttons}>
          <button
            className={styles.minus}
            onClick={() => toggleCartItemQuanitity(item._id, 'dec')}
          >
            <AiOutlineMinus />
          </button>
          <span className={styles.num}>{item.quantity}</span>
          <button
            className={styles.plus}
            onClick={() => toggleCartItemQuanitity(item._id, 'inc')}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <button
          type="button"
          className={styles.remove}
          onClick={() => onRemove(item)}
        >
          REMOVE
        </button>
      </div>
      <div className={styles.total}>
        <h3>${item.price * item.quantity}.00</h3>
      </div>
    </div>
  );
};

export default CartProduct;
