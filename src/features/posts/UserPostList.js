import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectPostsbyUserId, fetchPosts } from "./postsSlice"
import { Container, Row, Col, Image, Modal, CloseButton} from "react-bootstrap"
import { useParams } from "react-router-dom"
import UserPostCarousal from "./post/UserPostCarousal"
import {Spinner} from "react-bootstrap"
const UserPostList = ( { userId }) => {
    const postsStatus = useSelector(state => state.posts.status)
    const posts=useSelector(state=>selectPostsbyUserId(state, userId))
    console.log(posts)

    const [show, setShow]=useState(false)
    const [index, setIndex] = useState(0)

    const handleClick=(p, idx)=>{
        setShow(true)
        setIndex(idx)
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
                            <Col key={post.id} xs={4} className="square_256" onClick={()=>handleClick(post, idx)}>
                                <Image className="square_img_256" src={post.url} />
                            </Col>)
                    })}
                </Row>
            </Container>

</>
    )
}
export default UserPostList