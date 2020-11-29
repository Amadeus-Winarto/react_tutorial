import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  const return_value =  <div className="App">
                        <Navbar dark color="primary">
                          <div className="container">
                            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                          </div>
                        </Navbar>
                        <Menu />
                      </div>;
  return return_value;
}

export default App;
