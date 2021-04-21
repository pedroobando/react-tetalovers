import React from 'react';
import SecctionCategory from './SecctionCategory';
import SecctionHeader from './SecctionHeader';
import SecctionBrand from './SecctionBrand';
import SecctionFooter from './SecctionFooter';

const ProductPage = () => {
  return (
    <div className="mt-10">
      <SecctionHeader />
      <SecctionCategory />
      <SecctionBrand />
      <SecctionFooter />
    </div>
  );
};

export default ProductPage;
