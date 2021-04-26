import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Image, Item, Segment } from 'semantic-ui-react';

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
  const { name, imagenURL, linkURL, id } = banner;
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={imagenURL} fluid style={eventImageStyle} />

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
        <Button color="red" basic>
          Eliminar Banner
        </Button>

        <Button color="blue" floated="right">
          Actualizar
        </Button>

        <Button color="green" floated="right">
          Crear Banner
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default BannerItem;
