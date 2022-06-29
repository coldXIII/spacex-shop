import React from 'react';
import FooterCard from './FooterCard/FooterCard';
import styles from './footerbanner.module.scss'

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className={styles.FooterBanner}>
      {footerBanner.map((item) => (
        <FooterCard data={item} key={item._id} />
      ))}
    </div>
  );
};

export default FooterBanner;
