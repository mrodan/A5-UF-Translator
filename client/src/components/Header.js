import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header = () => {
  return (
    <header>
      <>
        <Navbar bg="primary" variant="dark" expand="lg" CollapseOnSelect>
          <Container>
            <Navbar.Brand href="/">UF Location Trasnslator</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/">
                <LocationOnIcon />
                All Questions
              </Nav.Link>
              <Nav.Link href="/new">
                <AddLocationIcon />
                New Location
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </header>
  );
};

export default Header;
