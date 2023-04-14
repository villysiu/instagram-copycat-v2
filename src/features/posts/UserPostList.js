import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
import { Container, Row, Col, Image, Modal, CloseButton} from "react-bootstrap"
import UserPostCarousal from "./post/UserPostCarousal"
import {Spinner} from "react-bootstrap"
import placeholder from "../../images/X (1).png"
import { backendAPI } from "../../app/data"
const UserPostList = ( { userId }) => {
    const postsStatus = useSelector(state => state.posts.status)
    const posts=useSelector(state=>selectPostsbyUserId(state, userId))
    

    const [show, setShow]=useState(false)
    const [index, setIndex] = useState(0)

    const handleClick=(idx)=>{
        setShow(true)
        setIndex(idx)
    }
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    if(!posts && postsStatus === 'loading'){
        return <Spinner />
    }
    if(posts.length===0 && postsStatus==="succeeded")
        return "User has no post."
        
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

            <Container fluid className="list-768 mt-3">
                <Row>
                    { posts.map((post, idx)=> {
                        return (
                            <Col key={post.id} xs={4} className="square_256" onClick={()=>handleClick(idx)}>
                                <Image className="square_img_256" src={`${backendAPI}/${post.url}`} onError={handleImgErr} />
                            </Col>)
                    })}
                </Row>
            </Container>

</>
    )
}
export default UserPostList