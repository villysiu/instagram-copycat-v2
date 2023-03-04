import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
import { Container, Row, Col, Image, Modal, CloseButton} from "react-bootstrap"

import UserPostCarousal from "./post/UserPostCarousal"
const UserPostList = ({userId}) => {
    const posts=useSelector(state=>selectPostsbyUserId(state, userId))
    console.log(posts)
    const [show, setShow]=useState(false)
  
const [index, setIndex] = useState(0)
    const handleClick=(p, idx)=>{
        
        setShow(true)
        setIndex(idx)
    }
    return(
        <>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-60w" 
                
            >
                <CloseButton onClick={() => setShow(false)} variant="white" className="carousal-close-btn" />
                <UserPostCarousal posts={posts} idx={index} handleClick={()=>setShow(false)}/>
            </Modal>

            <Container fluid className="list-768">
                <Row>
                    { posts.map((post, idx)=> {
                        return (
                            <Col key={post.id} xs={4} className="square_256" onClick={()=>handleClick(post, idx)}>
                                <Image className="square_img_256" src={`http://localhost:3000/${post.url}`} />
                            </Col>)
                    })}
                </Row>
            </Container>

</>
    )
}
export default UserPostList