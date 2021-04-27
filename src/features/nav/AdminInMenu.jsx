import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const AdminInMenu = () => {
  return (
    // <Menu.Item as={NavLink} to="/createEvent">
    //         <Button positive inverted content="Create Event" />
    //       </Menu.Item>
    <Menu.Item>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        search
        text="Administacion"
        icon="settings">
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/admin/banner" text="Banner's" icon="plus" />
          <Dropdown.Item as={Link} to="/admin/category" text="Categoria" icon="user" />
          <Dropdown.Item as={Link} to="/admin/producto" text="Productos" icon="power" />
          <Dropdown.Item as={Link} to="/admin/marca" text="Marcas" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default AdminInMenu;
