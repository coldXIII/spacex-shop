import React from 'react';
import Link from 'next/link';
import Button from '../../Button/Button';
import { urlFor } from '../../../lib/client';
import styles from './footercard.module.scss';

const FooterCard = ({ data }) => {
  const productTitle = data.name.split(' ').slice(0, 3).join(' ');

  return (
    <Link href={`/product/${data.slug.current}`}>
      <div className={styles.FooterCard}>
        <img src={urlFor(data.image[0])} className={styles.image} />
        <p>{productTitle}</p>
        <div className={styles.button}>
          <Button title={'Watch Product'} />
        </div>
      </div>
    </Link>
  );
};

export default FooterCard;
