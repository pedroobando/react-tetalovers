import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { listenToBannersFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { listenToBanners } from '../bannerActions';
import BannerItem from './BannerItem';

const BannerPage = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => listenToBannersFromFirestore(),
    data: (banners) => dispatch(listenToBanners(banners)),
    deps: [dispatch],
  });

  return (
    // <div style={{ position: 'relative', width: '100%', top: '50px' }}>
    //   <div className="mt-6 mx-2">
    <Container className="pst-5">
      {banners.map((bann, idx) => (
        <BannerItem banner={bann} key={idx} />
      ))}
    </Container>
  );
};

export default BannerPage;
