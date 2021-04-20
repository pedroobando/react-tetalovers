import React from 'react';
import { Image } from 'semantic-ui-react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SecctionHeader = () => {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
  };
  return (
    <>
      <Slider {...settings} style={{ width: '125%', left: '-12%' }}>
        <div>
          <Image src="assets/home-sliderdesktop.webp" />
        </div>
        <div>
          <Image src="assets/home-sliderdesktop1.webp" />
        </div>
      </Slider>
    </>
  );
};

export default SecctionHeader;
