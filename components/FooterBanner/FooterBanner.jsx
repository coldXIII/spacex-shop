import React from 'react';
import FooterCard from './FooterCard/FooterCard';
import styles from './footerbanner.module.scss';

const FooterBanner = ({ footerBanner }) => {
  const productsData = footerBanner.slice(0, 3);
  return (
    <div className={styles.FooterBanner}>
      {productsData.map((item) => (
        <FooterCard data={item} key={item._id} />
      ))}
    </div>
  );
};

export default FooterBanner;
