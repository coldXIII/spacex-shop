import React from 'react';
import { Toaster } from 'react-hot-toast';
import "swiper/css/bundle";
import  Layout  from '../layout/Layout';
import '../styles/globals.scss';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
