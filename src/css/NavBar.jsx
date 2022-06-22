import React from 'react';
import {Navbar,Container,Nav} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { FaCartArrowDown}from 'react-icons/fa';

function NavBar() {
    return ( 
<>
  <Navbar bg="dark"  variant="dark">
    <Container>
    <Navbar.Brand >Tienda</Navbar.Brand>
    <Nav className="me-auto">

      <Nav.Link as={Link}to="/Product">Product</Nav.Link>
      <Nav.Link as={Link}to="/Carrito">Carrito <FaCartArrowDown/></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <section>
          <Outlet/>
  </section>
</>
    );
}

export default NavBar;