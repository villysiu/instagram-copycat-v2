import { Container, Row, Col, Image, OverlayTrigger, Tooltip, } from "react-bootstrap"
import Like from "./Like"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { currentUser } from "../user/userSlice"

const Card = ({post}) => {
    const currUser=useSelector(currentUser);
    return (
        <Container fluid >
            <Row >
                <Col className="xs_show " xs={12} md={12}>{post.owner.name}</Col>
                <Col xs={12} md={6} >
                    <Image className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                </Col>
                <Col xs={12} md={6} >
                   <Row>
                        <Col xs={12} className="md_show" >{post.owner.name}</Col>
                    
                        <Col xs={12}>

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
                    
                            <div>  {post.desc}  </div>
                        </Col>
                    </Row>
                </Col>
   
                
            </Row>
        </Container>
    )
}
export default Card