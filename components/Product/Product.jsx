import React, { useState } from 'react';
import { urlFor } from '../../lib/client';
import Link from 'next/link';
import styles from './product.module.scss'

const Product = ({ product: { image, name, slug, price } }) => {
  const [turned, setTurned] = useState(false);
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div
          className={styles.Product}
          onMouseEnter={() => setTurned(true)}
          onMouseLeave={() => setTurned(false)}
        >
          <img
            src={turned ? urlFor(image && image[1]) : urlFor(image && image[0])}
            width={600}
            height={600}
            className={styles.image}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>${price}.00</p>
        </div>
      </Link>
    </>
  );
};

export default Product;
