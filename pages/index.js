import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, Hero } from '../components';
import Button from '../components/Button';

const Home = ({ products, footerBannerData }) => {
  const onlyTwo = products.slice(0, 2);
  return (
    <>
      <Hero />
      <div className="products-heading">
        <h2>Featured Products</h2>
      </div>
      <div className="products-container">
        {onlyTwo?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="viewall">
        <Button title={'view all featured'} />
      </div>
      <FooterBanner
        footerBanner={footerBannerData.length && footerBannerData}
      />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);


  const footerBannerQuery = "*[_type == 'footerbanner']";
  const footerBannerData = await client.fetch(footerBannerQuery);

  return {
    props: { products, footerBannerData },
  };
};

export default Home;
