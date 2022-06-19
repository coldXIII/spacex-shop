import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  return (
    <div>
      <div className="ProductDetails__container">
        <div>
          <div className="ProductDetails__image-container">
            <img
              src={urlFor(image && image[0])}
              className="ProductDetails__image"
            />
          </div>
        </div>

        <div className="ProductDetails__desc">
          <h1>{name}</h1>
          <p className="price">${price}.00</p>
          <span className="details">
            <b>Infant:</b> <br /> {details[0]}
          </span>
          <br />
          <br />
          <span className="details">
            <b>Toddler:</b> <br /> {details[1]}
          </span>

          <div className="ProductDetails__desc-selects">
            <select name="color">
              <option>Colour: White</option>
              <option>Colour: Black</option>
              <option>Colour: Gray</option>
            </select>
            <select>
              <option>Size: 0-3M</option>
              <option>Size: 3-6M</option>
              <option>Size: 6-9M</option>
            </select>
          </div>

          <div className="ProductDetails__desc-quantity">
            <div className="ProductDetails__desc-quantity--buttons">
              <button className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </button>
              <span className="num">{qty}</span>
              <button className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="ProductDetails__desc-buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              <span> Add to Cart</span>
            </button>
          </div>
          <span className="more-info">
            more information <AiOutlineRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
