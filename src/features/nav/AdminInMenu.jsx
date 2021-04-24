import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

const AdminInMenu = () => {
  return (
    <Menu.Item>
      <Dropdown pointing="top right" icon="settings">
        <Dropdown.Menu>
          <Dropdown.Header icon="tags" content="Administrar" />
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/admin/banner" text="Banner's" icon="plus" />
          <Dropdown.Item as={Link} to="/admin/categoria" text="Categoria" icon="user" />
          <Dropdown.Item as={Link} to="/admin/producto" text="Productos" icon="power" />
          <Dropdown.Item as={Link} to="/admin/marca" text="Marcas" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default AdminInMenu;
