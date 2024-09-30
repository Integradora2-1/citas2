import './Header.css'; 
import { vet } from './Vet 2 Care.png'
import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <Navbar.Brand href="/">
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/store">Tienda</Nav.Link>
          <Nav.Link href="/us">Nosotros</Nav.Link>
        </Nav>
        <div className="buttons">
          <Button variant="primary" onClick={() => window.location.href='/sMa'}>
            Añadir mascota
          </Button>
          <Button variant="primary" onClick={() => window.location.href='/cita'}>
            Agendar cita
          </Button>
        </div>
        <Form inline className="search-form">
          <FormControl type="search" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success" type="submit">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
