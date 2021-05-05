import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image, Label, Statistic } from 'semantic-ui-react';
import { openModal } from '../../../app/common/modals/modalReducer';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, category, name, description, imagenFile, price } = product;

  const priceFormat = new Intl.NumberFormat('de-DE').format(price);

  return (
    <Card>
      <Label attached="top" color="brown">
        {category.name}
      </Label>
      <Image src={imagenFile.url} wrapped alt={name} />
      <Card.Content extra>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <div className="right aligned content">
          <Statistic color="pink">
            <Statistic.Label>Precio:</Statistic.Label>
            <Statistic.Value>{priceFormat}</Statistic.Value>
          </Statistic>
        </div>
      </Card.Content>
      <Card.Content>
        <Button
          onClick={() =>
            dispatch(openModal({ modalType: 'ProductDelModal', modalProps: { product } }))
          }
          color="red"
          basic>
          Eliminar
        </Button>
        <Button as={Link} size="small" to={`product/${id}`} primary floated="right">
          <Icon name="edit" />
          Actualizar
        </Button>
      </Card.Content>
    </Card>
  );
};

export default ProductItem;
