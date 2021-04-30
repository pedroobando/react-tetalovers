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
