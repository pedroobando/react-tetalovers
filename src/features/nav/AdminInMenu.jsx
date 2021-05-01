import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const AdminInMenu = () => {
  const { menuActive, currentMenu } = useSelector((state) => state.menu);
  return (
    <>
      <Menu.Item>
        <Dropdown pointing="top left" text="Administacion">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/admin/banner" text="Banner's" icon="plus" />
            <Dropdown.Item as={Link} to="/admin/category" text="Categoria" icon="user" />
            <Dropdown.Item as={Link} to="/admin/product" text="Productos" icon="power" />
            <Dropdown.Item as={Link} to="/admin/marca" text="Marcas" icon="power" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      {menuActive && currentMenu && (
        <Menu.Item as={NavLink} to={currentMenu.createURL}>
          <Button positive inverted content={currentMenu.createText} />
        </Menu.Item>
      )}
    </>
  );
};

export default AdminInMenu;
