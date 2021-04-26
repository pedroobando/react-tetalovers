import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';
import { ListenToBannersFromFirestore } from '../../app/firestore/firestoreService';
import { useFirestoreCollection } from '../../app/hooks/useFirestoreCollection';
import { listenToBanners } from './bannerActions';
import BannerItem from './BannerItem';

const lstBanners = [
  {
    bannerId: '01',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop.webp',
    linkURL: '/product/teta2',
  },
  {
    bannerId: '02',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop1.webp',
    linkURL: '',
  },
  {
    bannerId: '03',
    name: 'Tetas de promosiones',
    imagenURL: 'assets/home-sliderdesktop2.webp',
    linkURL: '',
  },
  {
    bannerId: '04',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop3.webp',
    linkURL: '',
  },
  {
    bannerId: '05',
    name: 'Ubicanos',
    imagenURL: 'assets/home-sliderdesktop4.webp',
    linkURL: '',
  },
];

const BannerPage = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state) => state.banner);
  const { loading } = useSelector((state) => state.async);

  useFirestoreCollection({
    query: () => ListenToBannersFromFirestore(),
    data: (banners) => dispatch(listenToBanners(banners)),
    deps: [dispatch],
  });

  return (
    // <div style={{ position: 'relative', width: '100%', top: '50px' }}>
    //   <div className="mt-6 mx-2">
    <Container>
      <Segment.Group className="pst-5">
        {banners.map((bann, idx) => (
          <Segment key={idx}>
            <BannerItem
              banner={bann}
              // category={{
              //   ...bann,
              //   totalCount: products.filter((prd) => prd.category === cat.categoryId).length,
              // }}
            />
          </Segment>
        ))}
      </Segment.Group>
    </Container>
  );
};

export default BannerPage;
