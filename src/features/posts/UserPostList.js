import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
import { Container, Row, Col, Image, Modal} from "react-bootstrap"

import Caro from "./post/Caro"
const UserPostList = ({userId}) => {
    const posts=useSelector(state=>selectPostsbyUserId(state, userId))
    console.log(posts)
    const [show, setShow]=useState(false)
   
const [index, setIndex] = useState(0)
    const handleClick=(p, idx)=>{
        
        setShow(true)
        // setPostObj(p)
        setIndex(idx)
    }
    return(
<>

         <Container fluid className="list-900">
           
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-60w modal-dialog-centered"
                
               
            >
                {/* <Modal.Header closeButton /> */}
                
                <Caro posts={posts} idx={index} handleClick={()=>setShow(false)}/>
                
            </Modal>

                <Row>
                    { posts.map((post, idx)=> {
                        return <Col key={post.id} xs={4} className="square_img_300" onClick={()=>handleClick(post, idx)}>
                           
                            <Image style={{ width: '100%', height:'100%', objectFit: 'cover' }} src={`http://localhost:3000/${post.url}`} />
                                
                            </Col>
                    })}
                </Row>
            </Container>

</>
    )
}
export default UserPostList