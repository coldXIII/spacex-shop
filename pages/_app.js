import React from 'react';
import { Toaster } from 'react-hot-toast';
import 'swiper/css/bundle';
import Layout from '../layout/Layout';
import '../styles/globals.scss';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <StateContext>
        <Layout>
          <Toaster position="top-right" />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
  );
}

export default MyApp;
