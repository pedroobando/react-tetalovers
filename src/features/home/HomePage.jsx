import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/LoadingComponent';

import SecctionCategory from './SecctionCategory';
import SecctionBanner from '../banner/component/SecctionBanner';
import SecctionBrand from './SecctionBrand';
import SecctionProduct from './SecctionProduct';
import SecctionFooter from './SecctionFooter';

const HomePage = () => {
  const { loading } = useSelector((state) => state.async);
  return (
    <>
      {loading && <LoadingComponent />}
      <SecctionBanner />
      <Container>
        <SecctionCategory />
        <SecctionBrand />
        <SecctionProduct />
      </Container>
      <SecctionFooter />
    </>
  );
};

export default HomePage;
