import { useState } from "react"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
import { Container, Row, Col, Image, Modal, CloseButton} from "react-bootstrap"
import UserPostCarousal from "./post/UserPostCarousal"
import {Spinner} from "react-bootstrap"
import placeholder from "../../images/X (1).png"
import { backendAPI } from "../../app/helper"
const UserPostList = ( { userPosts, postsStatus }) => {
    

    // const [show, setShow]=useState(false)
    // const [index, setIndex] = useState(0)

    // const handleClick=(idx)=>{
    //     setShow(true)
    //     setIndex(idx)
    // }
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }

    if(userPosts.length===0){
        if(postsStatus === 'loading' || postsStatus === 'idle'){
            return <div><Spinner /></div>
        }
        else if(postsStatus === 'succeeded' ){
            return <div>User has no post.</div>
    
        }
    }    
    return(
        <>
            {/* <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-60w" 
                
            >
                <CloseButton onClick={() => setShow(false)} variant="white" className="carousal-close-btn" />
                <UserPostCarousal posts={posts} idx={index} handleClick={()=>setShow(false)}/>
            </Modal> */}

            <Container fluid 
            // className="list-768 mt-3"
            >
                <Row>
                    { userPosts.map((post, idx)=> {
                        return (
                            <Col key={post.id} sm={4} 
                            className="user_post_square_wrapper" 
                            // onClick={()=>handleClick(idx)}
                            >
                                <Image 
                                className="user_post_square_img" 
                                src={`${backendAPI}/${post.url}`} 
                                onError={handleImgErr} />
                            </Col>)
                    })}
                </Row>
            </Container>

</>
    )
}
export default UserPostList