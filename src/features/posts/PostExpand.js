import { Container, Row, Col, Image, Modal} from "react-bootstrap"
import { useState } from "react"
import { PostHeader } from "./post/PostHeader"
import EditPost from "./editPost/EditPost"
import Desc from "./post/Desc"
import Likes from "./post/Likes"
const Post = ({post, handleClick}) => {
    const [edit, showEdit] = useState(false);

    
    return (
        <Container fluid >
            <Modal show={edit} 
                onHide={() => showEdit(false)}
                dialogClassName="modal-90w">
                <EditPost post={post} />
            </Modal>
            <Row>
                <Col className="lg_show">
                    <Image className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                </Col>

                <Col>
                    <Row>
                        <Col lg={12}>
                            <PostHeader owner={post.owner} showEdit={showEdit} handleClick={handleClick}/>
                        </Col>
                        <Col className="xs_show">
                            <Image className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                        </Col>

                        <Col lg={12} className="post-expand-desc"><Desc owner={post.owner.name} desc={post.desc} /></Col>
                           
                        <Col lg={12}>
                        <Likes likes={post.likes} postId={post.id} />
                            
                        </Col>

                        
                                    
                        
                    </Row>
                </Col>
            </Row>
            
                
        </Container>
    )
}
export default Post