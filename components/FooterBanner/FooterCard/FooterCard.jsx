import React from 'react';
import Button from '../../Button/Button';
import { urlFor } from '../../../lib/client';
import styles from './footercard.module.scss'

const FooterCard = ({ data }) => {
  return (
    <div className={styles.FooterCard}>
      <img src={urlFor(data.image)} className={styles.image} />
      <p>{data.product}</p>
      <div className={styles.button}>
        <Button title={data.buttonText} />
      </div>
    </div>
  );
};

export default FooterCard;
