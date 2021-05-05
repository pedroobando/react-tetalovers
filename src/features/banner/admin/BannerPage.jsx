import React, { useState } from 'react';

import { Container } from 'semantic-ui-react';
import { listenToBannersFromFirestore } from '../../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../../app/hooks/useFirestoreCollection';
import { useMenuButtonCreate } from '../../../app/hooks/useMenuButtonCreate';

import BannerItem from './BannerItem';

const initialState = [];
const BannerPage = () => {
  const [banners, setBanners] = useState(initialState);
  // const { banners } = useSelector((state) => state.banner);
  // const { loading } = useSelector((state) => state.async);

  useMenuButtonCreate({
    createURL: '/admin/createbanner',
    createText: 'Crear Banner',
    deps: [],
  });

  useFirestoreCollection({
    query: () => listenToBannersFromFirestore(),
    data: (banners) => setBanners(banners),
    deps: [],
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
