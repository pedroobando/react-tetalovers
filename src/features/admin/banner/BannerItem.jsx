import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Table } from 'semantic-ui-react';

const BannerItem = ({ banner }) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Icon name="edit" />
        <span>{banner.name}</span>

        {/* <small>{cutDescription(product.description, 60)}</small> */}
      </Table.Cell>
      <Table.Cell textAlign="left">
        <span>{banner.linkURL}</span>
      </Table.Cell>
    </Table.Row>
  );
};

export default BannerItem;
