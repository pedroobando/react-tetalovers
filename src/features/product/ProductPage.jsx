import React from 'react';
import SecctionCategory from './SecctionCategory';
import SecctionHeader from './SecctionHeader';
import SecctionBrand from './SecctionBrand';

const ProductPage = () => {
  return (
    <div style={{ marginTop: 69 }}>
      <SecctionHeader />
      <SecctionCategory />
      <SecctionBrand />
    </div>
  );
};

export default ProductPage;
