import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Divider, Icon, Item, Segment } from 'semantic-ui-react';
import { openModal } from '../../../app/common/modals/modalReducer';

// import { deleteBannerInFirestore } from '../../../app/firestore/firestoreService';
// import BannerDelete from './BannerDelModal';

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();
  const { name, imagenURL, commentary, id } = category;

  return (
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image src={imagenURL} />
          <Item.Content>
            <Item.Header as="h2">{name}</Item.Header>
            <Item.Meta>
              <span className="cinema">{commentary}</span>
            </Item.Meta>
            <Divider />

            <Item.Extra>
              <Button as={Link} to={`category/${id}`} primary floated="right">
                <Icon name="edit" />
                Actualizar
              </Button>
              <Button as={Link} to={'/admin/createCategory'} color="green" floated="right">
                <Icon name="file text" />
                Crear Categoria
              </Button>
              <Button color="red" basic floated="left">
                <Icon name="remove" /> Remover
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default CategoryItem;