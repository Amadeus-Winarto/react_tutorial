import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';  

class DishDetail extends React.Component{
    constructor(props){
        super(props);
    }

    renderComments(comments){
        if(comments === null){
            return <div></div>;
        } else{
            const comments_list = comments.map(single_comment => {
                return  <ul key={single_comment.id} className="list-unstyled">
                            <li className="mb-2">{single_comment.comment}</li>
                            <li> -- {single_comment.author}{" "}
                            {new Date(single_comment.date).toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"})}</li>
                        </ul>; 

            });
    
            return comments_list;
        }
    }

    render(){
        const dish = this.props.dish;
        console.log(dish.comments);

        return  <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(dish.comments)}
                    </div>
                </div>;
    }

}

export default DishDetail;