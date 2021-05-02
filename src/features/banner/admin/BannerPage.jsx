import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { listenToBannersFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { useMenuButtonCreate } from '../../../app/hooks/useMenuButtonCreate';
import { listenToBanners } from '../bannerActions';
import BannerItem from './BannerItem';

const BannerPage = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  // const { loading } = useSelector((state) => state.async);

  useMenuButtonCreate({
    createURL: '/admin/createbanner',
    createText: 'Crear Banner',
    deps: [dispatch],
  });

  useFirestoreCollection({
    query: () => listenToBannersFromFirestore(),
    data: (banners) => dispatch(listenToBanners(banners)),
    deps: [dispatch],
  });

  return (
    <Container className="pst-5">
      {banners.map((bann, idx) => (
        <BannerItem banner={bann} key={idx} />
      ))}
    </Container>
  );
};

export default BannerPage;
