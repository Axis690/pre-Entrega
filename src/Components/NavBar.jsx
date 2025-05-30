import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";






const NavBar= () => {
  return (

       <Navbar expand="lg" bg="dark" variant="dark"  className="w-100 m-0">
          <Navbar.Brand as={Link} to ="/">Rick & Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             
          <Nav className="w-100 m-0">
            <Nav.Link as={Link} to="/Cartas" >Productos</Nav.Link>
            <Nav.Link as={Link} to="/Carrito">Carrito</Nav.Link>
          </Nav>
            </Navbar.Collapse>
      </Navbar>
      
      

 
  );
};

export default NavBar;

