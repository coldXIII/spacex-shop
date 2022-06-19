import React from 'react';

import FooterCard from './FooterCard';

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="FooterBanner__container">
      {footerBanner.map((item) => (
        <FooterCard data={item} key={item._id} />
      ))}
    </div>
  );
};

export default FooterBanner;
