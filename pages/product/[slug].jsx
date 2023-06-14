import React, { useState, useEffect } from 'react';
import { client } from '../../lib/client';
import styles from './slug.module.scss';
import SlugSlider from '../../components/SlugSlider/SlugSlider';
import SizeChart from '../../components/SizeChart/SizeChart';
import SlugDescription from '../../components/SlugDescription/SlugDescription';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import MayLike from '../../components/MayLike/MayLike';
import LightBox from '../../components/LightBox/LightBox';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const ProductDetails = ({ product, products }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const { image, sizeChart } = product;
  const [showTable, setShowTable] = useState(false);
  const [lightBox, setLightBox] = useState(false);
  const { slug } = router.query;

  const toggleTable = () => {
    setShowTable((prev) => !prev);
  };

  const postViewed = async () => {
     await client.create({
      _type: 'viewed',
      user: session?.user?.email,
      id:uuidv4(),
      product: product.name,
      slug:product.slug,
      image: image[0],
    });
  };

  useEffect(() => {
    postViewed();
  }, [slug]);

  return (
    <>
      <div className={styles.ProductDetails}>
        <div>
          <SlugSlider image={image} setLightBox={setLightBox} />
          {lightBox && (
            <LightBox
              lightBox={lightBox}
              image={image}
              onClose={() => setLightBox(false)}
            />
          )}
          {sizeChart && (
            <div className={styles.table}>
              <div className={styles.tableheader}>
                <span>Size Chart</span>
                <span onClick={toggleTable}>
                  {!showTable ? <AiOutlinePlus /> : <AiOutlineMinus />}
                </span>
              </div>
              {showTable && <SizeChart sizeChart={sizeChart} />}
            </div>
          )}
        </div>
        <div className={styles.desc}>
          <SlugDescription product={product} />
        </div>
      </div>
      <hr />
      <h1 className="maytitle">you may also like</h1>
      <MayLike products={products} product={product} />
    </>
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
