import React, { useState } from 'react';

import Link from 'next/link';

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  const [turned, setTurned] = useState(false);
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div
          className="Product__card"
          onMouseEnter={() => setTurned(true)}
          onMouseLeave={() => setTurned(false)}
        >
          <img
            src={turned ? urlFor(image && image[1]) : urlFor(image && image[0])}
            width={600}
            height={600}
            className="Product__image"
          />
          <p className="Product__name">{name}</p>
          <p className="Product__price">${price}.00</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
