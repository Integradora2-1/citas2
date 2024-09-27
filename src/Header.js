import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header ()  {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={'Vet 2 Care.png'} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/store">Tienda</Nav.Link>
            <Nav.Link href="/us">Nosotros</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={() => window.location.href='/sMa'}>
            Añadir mascota
          </Button>
          <Button variant="primary" onClick={() => window.location.href='/cita'} className="ml-2">
            Agendar cita
          </Button>
          <Form inline className="ml-2">
            <FormControl type="search" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success" type="submit">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default Header;