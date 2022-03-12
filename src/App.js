import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Navbar from './components/navbar/navbar.js'
import Home from './components/layout/home/index.js'
import About from './components/layout/aboutus/index.js'
import Contact from './components/layout/contact/index.js'
import Login from './components/authen/login/index.js'
import Sign_up from './components/authen/sign_up/index.js'
import Wallet from './components/layout/wallet/wallet.js'
import LoginUi from './components/authen/login/index.js'
import{
  BrowserRouter as Router,
  Routes,
  Route

}from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    {/*<LoginUi/>*/}
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}>
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
        <Route exact path="/contact" element={<Contact/>}>
        </Route>
        <Route exact path="/login" element={<Login/>}>
        </Route>
        <Route exact path="/sign_up" element={<Sign_up/>}>
        </Route>
        <Route exact path="/wallet" element={<Wallet/>}>
        </Route>
      </Routes>
    </Router>
    
    

    </>
  );
}

export default App;
