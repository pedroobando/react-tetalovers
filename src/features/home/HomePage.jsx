import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import LoadingComponent from '../../app/layout/LoadingComponent';

import SecctionBanner from '../banner/component/SecctionBanner';
import SecctionCategory from '../category/component/SecctionCategory';
import SecctionProduct from '../product/component/SecctionProduct';
import SecctionBrand from './SecctionBrand';

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
