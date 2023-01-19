import { useDispatch } from "react-redux"
import { useState } from "react"
import { editAPost, deleteAPost } from "./postsSlice"
import { Container, Row, Col, Modal, Form, Button, Image } from "react-bootstrap"

const EditPost = ({post}) =>{
    const dispatch=useDispatch()
    const [desc, setDesc] = useState(post.desc)
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("desc", desc)
        
        dispatch(editAPost({postId: post.id, formData: formData}))
        e.target.reset()
    }
    const handleDelete=e=>{
        e.preventDefault()
        dispatch(deleteAPost(post.id))
    }

    return (
        <Container fluid>
        <Row>
            <Col className="lg_show">
                <Image className="card_img" src={`http://localhost:3000/${post.url}`} />
            </Col>
            <Col>
                <Row>
                    <Col lg={12}>
                        <Modal.Header closeButton >
                            <Modal.Title>Edit post</Modal.Title>
                        </Modal.Header>
                    </Col>
                    <Col className="xs_show">
                        <Image className="card_img" src={`http://localhost:3000/${post.url}`} />
                    </Col>
                    <Col lg={12}>
                        <Form onSubmit={handleSubmit} >
                    
                            <Form.Group className="mb-3 px-3">               
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="5" name="desc" value={desc} placeholder="Description" 
                                    onChange={e=>setDesc(e.target.value)} />
                            </Form.Group> 
                    
                            
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleDelete}>
                                    Delete
                                </Button>
                                <Button variant="primary"  type='submit'>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>

                    </Col>
                </Row>
            </Col>
            
        </Row>
        
        </Container>
    )
}
export default EditPost