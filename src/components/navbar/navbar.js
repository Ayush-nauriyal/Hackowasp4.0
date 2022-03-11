import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Bo from "react-bootstrap";
import { FaWallet } from 'react-icons/fa';

export default function navbar()
{
    return(
        <>
       <Bo.Navbar bg="dark" expand="lg" variant="dark">
    <Bo.Navbar.Brand href="/">DUMMY Name</Bo.Navbar.Brand>
    <Bo.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Bo.Navbar.Collapse id="basic-navbar-nav">
      <Bo.Nav className="me-auto">
        <Bo.Nav.Link href="/about">About us</Bo.Nav.Link>
        <Bo.NavDropdown title="NFT" id="basic-nav-dropdown">
          <Bo.NavDropdown.Item href="#action/3.1">Action</Bo.NavDropdown.Item>
          <Bo.NavDropdown.Item href="#action/3.2">Another action</Bo.NavDropdown.Item>
          <Bo.NavDropdown.Item href="#action/3.3">Something</Bo.NavDropdown.Item>
   
        </Bo.NavDropdown>
        <Bo.NavDropdown title="Stocks" id="basic-nav-dropdown">
          <Bo.NavDropdown.Item href="#action/3.1">Action</Bo.NavDropdown.Item>
          <Bo.NavDropdown.Item href="#action/3.2">Another action</Bo.NavDropdown.Item>
          <Bo.NavDropdown.Item href="#action/3.3">Something</Bo.NavDropdown.Item>
        
        </Bo.NavDropdown>
        <Bo.NavDropdown title="Shares" id="basic-nav-dropdown">
          <Bo.NavDropdown.Item href="#action/3.1">Action</Bo.NavDropdown.Item>
          <Bo.NavDropdown.Item href="#action/3.2">Another action</Bo.NavDropdown.Item>
          <Bo.NavDropdown.Item href="#action/3.3">Something</Bo.NavDropdown.Item>
          
        </Bo.NavDropdown>
        <Bo.Nav.Link href="/contact">contact us</Bo.Nav.Link>
      </Bo.Nav>
        <Bo.Nav>
        <Bo.Nav.Link href="/wallet"><FaWallet/></Bo.Nav.Link>
      <Bo.Nav.Link href="/login">Login</Bo.Nav.Link>
      <Bo.Nav.Link href="/sign_up">
        Sign Up
      </Bo.Nav.Link>
    </Bo.Nav>
    </Bo.Navbar.Collapse>
  

  
</Bo.Navbar>

        </>
    )
}