import React, { useState } from 'react';
import styles from './Home.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import product from './../../assets/images/product_default.png'

export default function Home() {
  const [activeIndexes, setActiveIndexes] = useState(Array(10).fill(0)); // Array to store active image index for each item

  const images = [
    product,
    product,
    product,
    product,
    product,
    product,
    // Add other images here...
  ];

  const handleDotClick = (itemIndex, dotIndex) => {
    const newActiveIndexes = [...activeIndexes];
    newActiveIndexes[itemIndex] = dotIndex;
    setActiveIndexes(newActiveIndexes);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    }
  };

  return (
    <>
      <div className={`${styles.theBackGround} d-flex flex-column justify-content-center`}>
        <div className={styles.layer2}></div>
      </div>

      <Swiper 
          slidesPerView={"auto"}
          spaceBetween={5}
          freeMode={true}
          loop={true}
          className="mySwiper"
          modules={[Navigation, FreeMode, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={350}
        >

        {images.map((image, index) => (
          <SwiperSlide className={`${styles.border} ${styles.imageContainer}`} key={index}>
            <img className="w-100 home_img" src={image} alt="Fashion Item" />

            <div className={styles.checkboxContainer}>
              <input type="checkbox" id={`checkbox-red-${index}`} className={styles.checkbox} />
              <label htmlFor={`checkbox-red-${index}`} className={styles.checkboxLabelRed}></label>
              <input type="checkbox" id={`checkbox-gray-${index}`} className={styles.checkbox} />
              <label htmlFor={`checkbox-gray-${index}`} className={styles.checkboxLabelGray}></label>
            </div>

            <div className={styles.sizeOptions}>
              <span className={styles.size}>XS</span>
              <span className={styles.size}>S</span>
              <span className={styles.size}>M</span>
              <span className={styles.size}>L</span>
            </div>

            <div className={styles.dotSlider}>
              {images.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`${styles.dot} ${activeIndexes[index] === dotIndex ? styles.active : ''}`}
                  onClick={() => handleDotClick(index, dotIndex)}
                ></span>
              ))}
            </div>

            <p className="text-black text-center">Leather Jacket</p>
            <p className="text-black text-center">
              <span>2 color</span>
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={"/drop"} className={`${styles.theBackGround1} d-flex flex-column justify-content-center`}>
        <div className={styles.layer1}>
          <h1 className="text-white z-2 px-1">Exclusive Fashion</h1>
          <Link className={`${styles.link} text-white d-flex align-items-center justify-content-center`}>
            <i className='px-1 fa fa-arrow-right'></i>
            Discover
          </Link>
        </div>
      </Link>
    </>
  );
}
