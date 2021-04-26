import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { listenToBannersFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToBanners } from '../bannerActions';

const SecctionBanner = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  const { loading } = useSelector((state) => state.async);

  const { authenticated } = useSelector((state) => state.auth);

  useFirestoreCollection({
    query: () => listenToBannersFromFirestore(),
    data: (banners) => dispatch(listenToBanners(banners)),
    deps: [dispatch],
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
