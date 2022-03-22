import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AuthenticationService from './auth/AuthenticationService';

const Header = (props) => {
  const isLoggedIn = AuthenticationService.isLoggedIn();
  return (
    <>
      <Navbar bg='primary' variant='dark' className='navbar narbar-expand'>
        <Container>
          <Navbar.Brand href='/'>Panda Shop</Navbar.Brand>

          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            {isLoggedIn && <Nav.Link href='/order'>Order</Nav.Link>}
          </Nav>

          <Nav className='navbar-nav navbar-collapse justify-content-end'>
            {isLoggedIn && <Nav.Link href='/cart'>Cart</Nav.Link>}
            {!isLoggedIn && <Nav.Link href='/login'>Login</Nav.Link>}
            {isLoggedIn && (
              <Nav.Link
                href='/logout'
                onClick={AuthenticationService.deleteUser}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
