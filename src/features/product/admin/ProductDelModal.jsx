import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';
import { closeModal } from '../../../app/common/modals/modalReducer';
import ModalWrapper from '../../../app/common/modals/ModalWrapper';
import { deleteProductInFirestore } from '../../../app/firestore/firestoreService';

import { removeToCloudinary } from '../../../app/cloudinary/cloudinaryService';

const ProductDelModal = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size="small" header="Remover este producto">
      <Header as="h2" icon textAlign="center">
        <Icon name="remove" color="red" circular />
        <Header.Content>Este producto {product.name}, sera eliminado</Header.Content>
      </Header>
      <Divider fitted />
      <div className="my-3">
        <Button
          basic
          color="red"
          floated="left"
          className="px-5"
          onClick={() => dispatch(closeModal())}>
          <Icon name="remove" /> Abandonar
        </Button>
        <Button
          color="green"
          floated="right"
          className="px-5"
          onClick={async () => {
            await removeToCloudinary(product.imagenFile.id);
            await deleteProductInFirestore(product.id);
            dispatch(closeModal());
          }}>
          <Icon name="checkmark" /> Continuar
        </Button>
      </div>
      &nbsp;
    </ModalWrapper>
  );
};

export default ProductDelModal;
