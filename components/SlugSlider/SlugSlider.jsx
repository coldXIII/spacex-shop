import React from 'react';
import { urlFor } from '../../lib/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper';
import styles from './slugslider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

const SlugSlider = ({ image }) => {
  return (
    <>
      <Swiper
        direction={'vertical'}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className={styles.swiper}
      >
        {image.map((image, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <img src={urlFor(image && image)} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlugSlider;
