import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';  


function RenderMenuItem({ dish }){
    return  <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>; 
}

function RenderComments({ comments }){
    if(comments === null || comments === undefined){
        return <div/>;
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

function DishDetail({ dish }) {
    if (dish === null || dish === undefined){
        return <div></div>;
    } else {        
        return  <div className="container">  
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                        <RenderMenuItem dish = { dish } />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments= { dish.comments } />
                        </div>
                    </div>
                </div>;
    }
}

export default DishDetail;