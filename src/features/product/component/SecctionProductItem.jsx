import React from 'react';
import { Button, Card, Grid, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import CategoryDelModal from '../../category/admin/CategoryDelModal';

const SecctionProductItem = ({ product }) => {
  const { id, name, description, imagenFile, price, category } = product;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Card as={Link} to={`/products?product=${id}`}>
        <Image src={imagenFile.url} wrapped alt={name} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>

          <Card.Meta>
            <span className="ui brown horizontal label">{category.name}</span>
            <div>{description}</div>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon size="large" name="bookmark outline" floated="left" />
          <Button floated="right" as={Label} tag color="violet">
            <Icon name="shopping bag" />$ {price}
          </Button>
          {/* <Button color="orange" floated="right" size="small" circular></Button> */}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default SecctionProductItem;
