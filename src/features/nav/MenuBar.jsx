import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import AdminInMenu from './AdminInMenu';
// import { menuDesactivo } from './menuReducer';

const MenuBar = () => {
  const { authenticated } = useSelector((state) => state.auth);

  // dispatch(menuDesactivo());

  return (
    // inverted
    <Menu as="nav" fixed="top" text>
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '15px', height: '2.6em' }}
          />
          Tetas Lovers
        </Menu.Item>
        <Menu.Item as={NavLink} to="/home" name="home" />

        <Menu.Item as={NavLink} to="/sandbox" name="Sandbox" />

        {authenticated && <AdminInMenu />}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  );
};

export default MenuBar;
