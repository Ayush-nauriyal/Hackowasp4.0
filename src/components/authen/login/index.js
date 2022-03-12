/*const domain=process.env.Hackathon_Auth0_Domain;
const clientId=process.env.Hackathon_Auth0_Client;
*/
import React from 'react';
import {Form,Button} from "react-bootstrap";
import Log from "./login.png";
import "./style.css"
export default function Login(){
  return(
  <>
  <div id="img">
    <img src={Log} ></img>
  <Form action="/"> 
  <Form.Group className="mb-3" controlId="formBasicEmail" >
    <Form.Label iid="bold">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  id="wid"/>
    <Form.Text className="text-muted">
        Your Information is secure with us
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label id="bold">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="wid" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  
</Form>
  </div>
  
  </>
  )
}
