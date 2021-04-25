import React from 'react';
import { Container } from 'semantic-ui-react';
import SecctionCategory from './SecctionCategory';
import SecctionBanner from './SecctionBanner';
import SecctionBrand from './SecctionBrand';
import SecctionProduct from './SecctionProduct';
import SecctionFooter from './SecctionFooter';

const HomePage = () => {
  return (
    <>
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
