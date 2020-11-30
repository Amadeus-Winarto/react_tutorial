import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
// import { render } from '@testing-library/react';

class Main extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES, 
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
}

  render(){
    const return_value =  (<div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <Menu
        dishes={this.state.dishes}
        onClick={dishId => this.onDishSelect(dishId)}/>
    <DishDetail
        dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
    </div>) ;

    return return_value;
  }
}

export default Main;
