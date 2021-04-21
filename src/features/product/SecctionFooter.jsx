import React from 'react';
import { Grid, Header, Icon, Input, List } from 'semantic-ui-react';

const SecctionFooter = () => {
  return (
    <Grid
      stackable
      columns={3}
      className="mt-5 py-5 px-5"
      style={{ backgroundColor: 'white' }}
      divided>
      <Grid.Column>
        <Header as="h2">
          <Icon name="like" color="olive" />
          <Header.Content>
            Teta Lovers
            <Header.Subheader>Hechas con amor.</Header.Subheader>
          </Header.Content>
        </Header>

        <List>
          <List.Item icon="phone" content="+58 (424-863.09.39)" />
          <List.Item icon="phone" content="+58 (414-693.65.87) (414-498.00.05)" />
          <List.Item
            icon="mail"
            content={<a href="mailto:teta_lovers@gmail.com">teta_lover@gmail.com</a>}
          />
          <List.Item
            icon="instagram"
            content={
              <a href="http://www.instagram.com/teta_lovers" target="_blank" rel="noreferrer">
                @teta_lovers
              </a>
            }
          />
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header as="h3">
          <Icon name="linkify" />
          <Header.Content>Vinculos rapidos</Header.Content>
        </Header>

        <List as="ul">
          <List.Item as="li">Categorias</List.Item>
          <List.Item as="li">Productos</List.Item>
          <List.Item as="li">Carrito</List.Item>
          <List.Item as="li">Ubicanos</List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header as="h3">
          <Icon name="periscope" color="olive" />
          <Header.Content>Contatanos</Header.Content>
        </Header>
        <form>
          <Input
            icon
            type="email"
            name="email"
            placeholder="Indique su email"
            style={{ width: '100%' }}>
            <Icon name="at" />
            <input />
          </Input>
          <textarea
            name="message"
            placeholder="Indique el mensaje"
            rows={4}
            style={{ width: '100%', marginTop: '10px' }}
          />
        </form>
      </Grid.Column>
    </Grid>
  );
};

export default SecctionFooter;
