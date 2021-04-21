import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SecctionCategoryItem = ({ category }) => {
  const { categoryId, name, commentary, imagenURL } = category;

  return (
    <Grid.Column mobile={8} tablet={5} computer={3}>
      <Link to={`/products?category=${categoryId}`}>
        <Image src={imagenURL} circular size="medium" />
      </Link>
    </Grid.Column>
  );
};

{
  /* <Grid.Column mobile={16} tablet={8} computer={4}>
<Card as={Link} to={`/products?category=${categoryId}`}>
  <Image src={imagenURL} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{name}</Card.Header>
    <Card.Meta>
      <span>{commentary}</span>
    </Card.Meta>
  </Card.Content>
</Card>
</Grid.Column> */
}

export default SecctionCategoryItem;
