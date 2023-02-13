import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { currentUser } from "../../user/userSlice";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { addComment } from "../postsSlice";
const AddComment = ({post_id}) => {
    const dispatch = useDispatch();
    
    const formRef=useRef()
    const handleSubmit=(e)=>{
        console.log(e.target)
        e.preventDefault();
        const formData=new FormData(formRef.current)
        
        dispatch(addComment( {postId: post_id, formData: Object.fromEntries(formData) } ))
        e.target.reset();
    }
    return (
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit} >
        <Row><Col>
       
        <Form.Group>
          <Form.Control as="textarea" name="comment" rows="1" placeholder="Add a comment" />
        </Form.Group>
       </Col><Col className="ccc">
          <Button variant="outline-primary" type="submit" className="comment-btn">
              post
          </Button>
          </Col></Row>
      </Form>
      </Container>
        
    )
}
export default AddComment