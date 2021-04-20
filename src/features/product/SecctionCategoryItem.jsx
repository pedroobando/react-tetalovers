import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SecctionCategoryItem = ({ category }) => {
  const { id, name, commentary, imagenURL } = category;

  return (
    <Card as={Link} to={`/products?category=${category.id}`}>
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
