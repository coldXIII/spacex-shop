import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import Button from '../components/Button/Button';

const Home = ({ products}) => {
  const mainProducts = new Array(products[0],products[3])

  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Featured Products</h2>
      </div>
      <div className="products-container">
        {mainProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="viewall">
        <Button title={'view all featured'} />
      </div>
      <FooterBanner
        footerBanner={products.length && products}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
