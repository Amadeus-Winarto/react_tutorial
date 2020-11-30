import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';  
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    return  <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>; 
}

function RenderComments({ comments }) {
    if(comments === null || comments === undefined) {
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

function DishDetail({ dish, comments}) {
    if (dish === null || dish === undefined) {
        return <div></div>;
    } else {        
        return  <div className="container"> 
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{dish.name}</h3>
                        <hr />
                    </div>
                    </div> 
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = { dish } />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments= { comments } />
                        </div>
                    </div>
                </div>;
    }
}

export default DishDetail;