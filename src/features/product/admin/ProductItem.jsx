import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Divider, Icon, Image, Label, Statistic } from 'semantic-ui-react';
import { openModal } from '../../../app/common/modals/modalReducer';

// import { deleteBannerInFirestore } from '../../../app/firestore/firestoreService';
// import BannerDelete from './BannerDelModal';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, categoryId, name, description, imagenURL, price } = product;

  return (
    <Card>
      <Label attached="top">{categoryId}</Label>
      <Image src={imagenURL} wrapped ui={false} />
      <Card.Content extra>
        <Card.Header>{name}</Card.Header>
        <Card.Description>{description}</Card.Description>
        <div className="right aligned content">
          <Statistic horizontal color="pink">
            <Statistic.Label>Precio:</Statistic.Label>
            <Statistic.Value>{price}</Statistic.Value>
          </Statistic>
        </div>
      </Card.Content>
      <Card.Content>
        <Button size="small" color="red" basic floated="left">
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
