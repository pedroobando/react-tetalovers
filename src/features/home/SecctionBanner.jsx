import React from 'react';
import { useSelector } from 'react-redux';

import { Button, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const lstBanners = [
  {
    promotionId: '01',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop.webp',
    linkURL: '/product/teta2',
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
  const { authenticated } = useSelector((state) => state.auth);
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
        {lstBanners.map((promo, idx) => (
          <Link key={idx} to={promo.linkURL.toString().length > 1 ? promo.linkURL : '/home'}>
            <Image src={promo.imagenURL} alt={promo.name} />
          </Link>
        ))}
      </Slider>
      {authenticated && (
        <Button basic icon labelPosition="right" id="buttonchange">
          Change
          <Icon name="edit outline" />
        </Button>
      )}
    </section>
  );
};

export default SecctionBanner;
