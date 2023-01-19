import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
import { Container, Row, Col, Image, Modal} from "react-bootstrap"
import PostExpand from './PostExpand'

// import { currentUser } from "../user/userSlice"
const UserPostList = ({user, showUserPostsCB}) => {
    const posts=useSelector(state=>selectPostsbyUserId(state, user.id))
    console.log(posts)
    const [show, setShow]=useState(false)
    const [postObj, setPostObj]=useState(null)

    const handleClick=(p)=>{
        
        setShow(true)
        setPostObj(p)
        console.log("yryeurh")
    }
    return(

         <Container fluid className="list-900">
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
            >
                <PostExpand post={postObj} handleClick={()=>setShow(false)} />
            </Modal>

            {/* <h5>Posts by {user.name}</h5> */}
            
            {/* <Container style={{maxWidth: '900px', margin:'0' }}> */}
                <Row>
                    { posts.map(post => {
                        return <Col key={post.id} xs={4} className="square_img_300" onClick={()=>handleClick(post)}>
                           
                            <Image style={{ width: '100%', height:'100%', objectFit: 'cover' }} src={`http://localhost:3000/${post.url}`} />
                                
                            </Col>
                    })}
                </Row>
            </Container>

        
    )
}
export default UserPostList