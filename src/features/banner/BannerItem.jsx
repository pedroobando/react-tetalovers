import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon, Table } from 'semantic-ui-react';

const BannerItem = ({ banner }) => {
  const { name, linkURL, bannerId } = banner;
  return (
    <Link to={`banner/${bannerId}`}>
      <Header as="h4" color="purple">
        <Icon name="edit" />
        <Header.Content>
          {name}
          <Header.Subheader>{linkURL}</Header.Subheader>
        </Header.Content>
      </Header>
    </Link>
  );
};

export default BannerItem;
