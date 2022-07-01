import React from 'react';
import { urlFor } from '../../lib/client';
import { AiOutlineClose } from 'react-icons/ai';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import styles from './ligthbox.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

const LightBox = ({  lightBox, onClose, image }) => {
  if (!lightBox) return null;

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.LightBox}>
        <button onClick={onClose} className={styles.close}>
          <AiOutlineClose />
        </button>
        <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className={styles.swiper}
      >
        {image.map((image, index) => (
          <SwiperSlide className={styles.slide} key={index}>
            <img
              src={urlFor(image && image)}
              className={styles.image}
              onClick={() => setLightBox(true)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
};

export default LightBox;
