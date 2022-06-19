import React from 'react';
import { urlFor } from '../lib/client';
import Button from './Button';

const FooterCard = ({ data }) => {
  return (
    <div className="FooterCard">
      <img src={urlFor(data.image)} className="FooterCard-image" />
      <p>{data.product}</p>
      <div className="FooterCard-button">
        <Button title={data.buttonText} />
      </div>
    </div>
  );
};

export default FooterCard;
