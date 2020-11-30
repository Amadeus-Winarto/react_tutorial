import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES
        };
  }

  render(){
        const return_value =  (<div className="App">
        <Header />
        <Switch>
            <Route path="/home" component={() => <Home />} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
        </div>) ;

        return return_value;
    }
}

export default Main;
