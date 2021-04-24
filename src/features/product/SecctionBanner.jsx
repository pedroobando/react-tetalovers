import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const lstPromotions = [
  {
    promotionId: '01',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop.webp',
    linkURL: '',
  },
  {
    promotionId: '02',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop1.webp',
    linkURL: '',
  },
  {
    promotionId: '03',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop2.webp',
    linkURL: '',
  },
  {
    promotionId: '04',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop3.webp',
    linkURL: '',
  },
  {
    promotionId: '05',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop4.webp',
    linkURL: '',
  },
];

const SecctionBanner = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };
  return (
    <section className="banner">
      <Slider {...settings}>
        {lstPromotions.map((promo, idx) => (
          <div key={idx}>
            <Image src={promo.imagenURL} alt={promo.name} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SecctionBanner;
