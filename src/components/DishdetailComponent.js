import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Col, Row, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const minLength = (val) => (!val) || (val.length >= 3);
const maxLength = (val) => (!val) || (val.length <= 15);


class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmits = this.handleSubmits.bind(this);
    }

    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen});
    }

    handleSubmits(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
        return  <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) =>this.handleSubmits(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" className="form-control" id="rating" name="rating" defaultValue="1">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" className="form-control" id="author" name="author" placeholder="Your Name" 
                                validators = {{
                                    minLength,
                                    maxLength
                                }}/>
                                <Errors className="text-danger" model=".author" show="touched" messages={{
                                    minLength: "Must be greater than 2 characters",
                                    maxLength: "Must be 15 characters or less"
                                }}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" className="form-control" id="comment" name="comment" rows="4" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 10, offset: 0}}>
                                <Button type="submit" color="primary">Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    </ModalBody>
                </Modal>
                </div>;
    }
}

function RenderDish({ dish }) {
    return  <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>; 
}

function RenderComments({ comments, addComment, dishId }) {
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
        return  <div>
                    {comments_list}
                    <CommentForm dishId={dishId} addComment={addComment}></CommentForm>
                </div>;
    }
}

function DishDetail(props) {
    if (props.dish === null || props.dish === undefined) {
        return <div></div>;
    } else {        
        return  <div className="container"> 
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    </div> 
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                        <RenderDish dish = { props.dish } />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments comments= { props.comments } 
                            addComment={props.addComment} 
                            dishId={props.dish.id} />
                        </div>
                    </div>
                </div>;
    }
}

export default DishDetail;