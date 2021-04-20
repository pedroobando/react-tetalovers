import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SecctionCategoryItem = ({ category }) => {
  const { categoryId, name, commentary, imagenURL } = category;

  return (
    <Card as={Link} to={`/products?category=${categoryId}`}>
      <Image src={imagenURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{commentary}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default SecctionCategoryItem;
