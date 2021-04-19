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
            style={{ marginBotton: 12, width: 200, marginRight: 50 }}
          />
          Teta Lovers
        </Header>
        <Button size="huge" inverted onClick={() => history.push('/events')}>
          Vamos por una <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default StartPage;
