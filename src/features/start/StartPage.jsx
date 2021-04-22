import React from 'react';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

const StartPage = ({ history }) => {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/assets/logo.png"
            style={{ marginBotton: 12, width: 100, marginRight: 20 }}
          />
          <Header.Content>
            Tetas Lovers
            <Header.Subheader>Hechas con amor.</Header.Subheader>
          </Header.Content>
        </Header>
        <Button size="huge" inverted onClick={() => history.push('/product')}>
          Vamos por una <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  );
};

export default StartPage;
