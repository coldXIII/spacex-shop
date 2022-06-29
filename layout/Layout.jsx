import React from 'react';
import Head from 'next/head';
import { Navbar, Footer } from '../components';
import styles from './layout.module.scss'


const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>SpaceX Shop</title>
      </Head>
      <header className={styles.header}>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
