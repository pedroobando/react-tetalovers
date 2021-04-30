import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SecctionCategoryItem = ({ category }) => {
  const { categoryId, name, imagenURL } = category;

  return (
    <Link className="categoryItem my-2 mx-1" to={`/teta?category=${categoryId}`}>
      <Image src={imagenURL} circular size="medium" alt={name} />
    </Link>
  );
};

export default SecctionCategoryItem;
