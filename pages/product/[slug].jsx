import React from 'react';
import { client, urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import styles from './slug.module.scss';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div>
      <div className={styles.ProductDetails}>
        <div>
          <img src={urlFor(image && image[0])} className={styles.image} />
        </div>

        <div className={styles.description}>
          <h1>{name}</h1>
          <p className={styles.price}>${price}.00</p>
          <span className={styles.details}>
            <b>Infant:</b> <br /> {details[0]}
          </span>
          <br />
          <br />
          <span className={styles.details}>
            <b>Toddler:</b> <br /> {details[1]}
          </span>

          <div className={styles.selects}>
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

          <div className={styles.quantity}>
            <div className={styles.buttons}>
              <button className={styles.minus} onClick={decQty}>
                <AiOutlineMinus />
              </button>
              <span className={styles.num}>{qty}</span>
              <button className={styles.plus} onClick={incQty}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.addtocart}
              onClick={() => onAdd(product, qty)}
            >
              <span> Add to Cart</span>
            </button>
          </div>
          <span className={styles.moreinfo}>
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
