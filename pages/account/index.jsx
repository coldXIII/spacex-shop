import React, { useState, useEffect } from 'react';
import { client } from '../../lib/client';
import { useSession } from 'next-auth/react';
import { urlFor } from '../../lib/client';
import Link from 'next/link';
import styles from './account.module.scss';

const index = () => {
  const { data: session } = useSession();
  const [viewed, setViewed] = useState([]);

  const user = session?.user?.email;

  useEffect(() => {
    const fetchViewed = async () => {
      const result = await client.fetch(
        `*[_type == "viewed" && user == "${user}"]`
      );
      const uniqueProducts = result.filter((item, index) => {
        return (
          index === result.findIndex((obj) => obj.product === item.product)
        );
      });
      setViewed(uniqueProducts);
    };
    fetchViewed();
  }, [user]);

  const handleRemove = async (id) => {
    try {
      await client.delete({query: `*[_type == "viewed" && id == "${id}"]`});
      setViewed(viewed.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className={styles.Account}>
      <div className={styles.user}>
        <p>{user}</p>
        <img src={session?.user?.image} alt="" />
      </div>
      <h1>
        {viewed.length > 0
          ? 'Recently viewed products'
          : 'There are no recently viewed products yet'}
      </h1>
      {viewed.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.image}>
            <img src={urlFor(item.image && item.image)} alt={item.product} />
          </div>
          <div className={styles.name}>
            <Link href={`/product/${item.slug.current}`}>{item.product}</Link>
          </div>
          <button onClick={() => handleRemove(item.id)}>
            Remove viewed product
          </button>
        </div>
      ))}
    </div>
  );
};

export default index;
