import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Bo from "react-bootstrap";
import { FaWallet } from 'react-icons/fa';

export default function navbar()
{
    return(
        <>
       <Bo.Navbar bg="dark" expand="lg" variant="dark">
    <Bo.Navbar.Brand href="/">Quintet</Bo.Navbar.Brand>
    <Bo.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Bo.Navbar.Collapse id="basic-navbar-nav">
      <Bo.Nav className="me-auto">
        {/* <Bo.Nav.Link href="/about">About us</Bo.Nav.Link> */}
        <Bo.Nav.Link href="/nft">NFT</Bo.Nav.Link>
        <Bo.Nav.Link href="/crypto">Crypto</Bo.Nav.Link>
        <Bo.Nav.Link href="/stock">Stocks</Bo.Nav.Link>
        <Bo.Nav.Link href="/news">News</Bo.Nav.Link>
   
        <Bo.Nav.Link href="/contact">Contact Us</Bo.Nav.Link>
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