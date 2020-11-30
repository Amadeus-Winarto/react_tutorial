import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
    <Header />
    <Menu
        dishes={this.state.dishes}
        onClick={dishId => this.onDishSelect(dishId)}/>
    <DishDetail
        dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]}/>
    <Footer />
    </div>) ;

    return return_value;
  }
}

export default Main;
