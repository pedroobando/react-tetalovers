import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

const MenuBar = () => {
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: '15px' }} />
          Tetas Lovers
        </Menu.Item>
        <Menu.Item as={NavLink} to="/catalogo" name="Tetas" />
        <Menu.Item as={NavLink} to="/sandbox" name="Sandbox" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default MenuBar;
