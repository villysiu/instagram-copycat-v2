import { Container, Row, Col, Image, OverlayTrigger, Tooltip, Modal} from "react-bootstrap"
import Like from "./Like"
import { Heart } from "react-bootstrap-icons"
import { useState } from "react"
import { useSelector } from "react-redux"
import { currentUser } from "../user/userSlice"
import { PostHeader } from "./PostHeader"
import EditPost from "./EditPost"

const Post = ({post, handleClick}) => {
    const currUser=useSelector(currentUser);
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

                        <Col lg={12} className="post-expand-desc border-top">{post.desc}</Col>

                        <Col lg={12} className="border-top">
                            <OverlayTrigger placement="top" overlay={ 
                                <Tooltip> 
                                    { post.likes.length===0 ? 
                                        <div>No like yet.</div>:
                                        post.likes.map(like=><div key={like.user.id}>{like.user.name}</div>)}
                                </Tooltip> }>
                                <span>
                                    { currUser?  <Like currUser={currUser} likes={post.likes} postId={post.id}/> : <Heart /> }
                                    {" "} {post.likes.length} likes
                                </span>
                            </OverlayTrigger>
                        </Col>

                        
                                    
                        
                    </Row>
                </Col>
            </Row>
            
                
        </Container>
    )
}
export default Post