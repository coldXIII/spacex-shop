import React from 'react';
import Head from 'next/head';
import { Navbar, Footer } from '../components';
import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>SpaceX Shop</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <header className={styles.header}>
          <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
