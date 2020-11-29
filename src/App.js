import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

const return_value =  <div className="App">
                        <Navbar dark color="primary">
                          <div className="container">
                            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                          </div>
                        </Navbar>
                      </div>;
function App() {
  return return_value;
}

export default App;
