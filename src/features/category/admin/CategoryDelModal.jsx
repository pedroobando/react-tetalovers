import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';
import { closeModal } from '../../../app/common/modals/modalReducer';
import ModalWrapper from '../../../app/common/modals/ModalWrapper';
import { deleteCategoryInFirestore } from '../../../app/firestore/firestoreService';
// import { deleteCategory } from '../categoryActions';

const CategoryDelModal = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size="small" header="Remover esta categoria">
      <Header as="h2" icon textAlign="center">
        <Icon name="remove" color="red" circular />
        <Header.Content>Esta categoria {category.name}, sera eliminada</Header.Content>
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
            await deleteCategoryInFirestore(category.id);
            dispatch(closeModal());
          }}>
          <Icon name="checkmark" /> Continuar
        </Button>
      </div>
      &nbsp;
    </ModalWrapper>
  );
};

export default CategoryDelModal;
