import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider, Header, Icon } from 'semantic-ui-react';
import { closeModal } from '../../../app/common/modals/modalReducer';
import ModalWrapper from '../../../app/common/modals/ModalWrapper';
import { deleteBanner } from '../bannerActions';

const BannerDelModal = ({ banner }) => {
  const dispatch = useDispatch();

  return (
    <ModalWrapper size="small" header="Remover este banner">
      <Header as="h2" icon textAlign="center">
        <Icon name="remove" color="red" circular />
        <Header.Content>
          Este banner {banner.name}, sera eliminado y por lo tanto no volvera aparecer
        </Header.Content>
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
          onClick={() => {
            dispatch(deleteBanner(banner.id));
            dispatch(closeModal());
          }}>
          <Icon name="checkmark" /> Continuar
        </Button>
      </div>
      &nbsp;
    </ModalWrapper>
  );
};

export default BannerDelModal;
