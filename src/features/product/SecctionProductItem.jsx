import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SecctionProductItem = ({ category }) => {
  const { categoryId, name, commentary, imagenURL } = category;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Card as={Link} to={`/products?category=${categoryId}`}>
        <Image src={imagenURL} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span>{commentary}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default SecctionProductItem;
