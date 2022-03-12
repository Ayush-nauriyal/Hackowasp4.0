/*const domain=process.env.Hackathon_Auth0_Domain;
const clientId=process.env.Hackathon_Auth0_Client;
*/
import React from 'react';
import {Form,Button} from "react-bootstrap";
import "./style.css"
export default function Login(){
  return(
  <>
  <div id="img">
     
  <Form action="/"> 
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label id="bold">First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your first name"  id="wid"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label id="bold">Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Last name"  id="wid"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label iid="bold">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  id="wid"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="bold">Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Your phone number" id="wid" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="bold">PAN Id</Form.Label>
    <Form.Control type="number" placeholder="Pan Id" id="wid" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="bold">Aadhar Id</Form.Label>
    <Form.Control type="number" placeholder="Aadhar Id" id="wid" />
  </Form.Group>
  <Button variant="info" type="submit">
    Sign up
  </Button>
  
</Form>
  </div>
  
  </>
  )
}
