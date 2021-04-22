import React from 'react';
import { Container } from 'semantic-ui-react';
import SecctionCategory from './SecctionCategory';
import SecctionHeader from './SecctionHeader';
import SecctionBrand from './SecctionBrand';
import SecctionProduct from './SecctionProduct';
import SecctionFooter from './SecctionFooter';

const ProductPage = () => {
  return (
    <div className="mt-10">
      <SecctionHeader />
      <Container>
        <SecctionCategory />
        <SecctionBrand />
        <SecctionProduct />
      </Container>
      <SecctionFooter />
    </div>
  );
};

export default ProductPage;
