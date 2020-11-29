import React from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
// import { render } from '@testing-library/react';

class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
    };
  }


  render(){
    const return_value =  (<div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu dishes={this.state.dishes}/>
    </div>) ;

    return return_value;
  }
}

export default App;
