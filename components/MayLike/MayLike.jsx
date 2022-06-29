import React from 'react';
import { urlFor } from '../../lib/client';
import Link from 'next/link';
import styles from './maylike.module.scss';

const MayLike = ({ products }) => {
  return (
    <div className={styles.MayLike}>
  
      {products.map((item, index) => (
        <div className={styles.item} key={index}>
          <Link href={`/product/${item.slug.current}`}>
            <div className={styles.product}>
              <img
                src={urlFor(item.image && item.image[0])}
                width={600}
                height={600}
                className={styles.image}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MayLike;
