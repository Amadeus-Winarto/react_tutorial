import React from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render(){
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter(dish => dish.featured)[0]} 
                        promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                        leader={this.state.leaders.filter(leader => leader.featured)[0]}/>
            );
        };

        const return_value =  (<div className="App">
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route exact path="/contactus" component={() => <Contact/>} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
        </div>) ;

        return return_value;
    }
}

export default Main;
