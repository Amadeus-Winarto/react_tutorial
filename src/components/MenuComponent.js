import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';  
import DishDetail from './DishdetailComponent';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if (dish != null){
            return <DishDetail dish={dish}></DishDetail>; 
        } else{
            return <div></div> ;
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;