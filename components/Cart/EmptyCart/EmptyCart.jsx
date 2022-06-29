import React from 'react';
import styles from './emptycart.module.scss';
import Link from 'next/link';
import Button from '../../Button/Button';
import { AiOutlineShopping } from 'react-icons/ai';

const EmptyCart = ({ setShowCart }) => {
  return (
    <div className={styles.EmptyCart}>
      <AiOutlineShopping size={250} style={{ color: 'black' }} />
      <h3>Your shopping bag is empty</h3>
      <div className={styles.button} onClick={() => setShowCart(false)}>
        <Link href="/">
          <Button title={'Continue Shopping'} />
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
