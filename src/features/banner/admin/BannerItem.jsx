import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Item, Segment } from 'semantic-ui-react';
import { openModal } from '../../../app/common/modals/modalReducer';

const eventImageStyle = {
  filter: 'brightness(80%)',
};

const eventImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white',
};

const BannerItem = ({ banner }) => {
  const dispatch = useDispatch();
  const { name, imagenFile, linkURL, id } = banner;

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={imagenFile.url} fluid style={eventImageStyle} />

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header size="huge" content={name} style={{ color: 'white' }} />
                <p>
                  Direccion <strong>{linkURL}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button
          onClick={() =>
            dispatch(openModal({ modalType: 'BannerDelModal', modalProps: { banner } }))
          }
          color="red"
          basic>
          Eliminar Banner
        </Button>

        <Button as={Link} to={`banner/${id}`} color="blue" floated="right">
          Actualizar
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default BannerItem;
