import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { listenToBannersFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
// import { listenToBanners } from '../bannerActions';

import './styleSecctionBanner.scss';

const initialState = [];

const SecctionBanner = () => {
  const [banners, setBanners] = useState(initialState);
  // const { banners } = useSelector((state) => state.banner);
  // const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => listenToBannersFromFirestore(),
    data: (banners) => setBanners([...banners]),
    deps: [],
  });

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
        {banners.map((promo, idx) => (
          <Link key={idx} to={promo.linkURL.toString().length > 1 ? promo.linkURL : '/home'}>
            <img src={promo.imagenFile.url} alt={promo.name} />
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default SecctionBanner;
