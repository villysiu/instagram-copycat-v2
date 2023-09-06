import { useState } from "react"
import { Container, Row, Col, Image, Modal, CloseButton} from "react-bootstrap"
import UserPostCarousal from "./post/UserPostCarousal"
import {Spinner} from "react-bootstrap"
import placeholder from "../../images/X (1).png"
import { backendAPI } from "../../app/helper"
import { HeartFill } from "react-bootstrap-icons"
import { X, ChatFill } from "react-bootstrap-icons"
const UserPostList = ( { userPosts, postsStatus }) => {

    const [show, setShow]=useState(false)
    const [index, setIndex] = useState(0)

    const handleClick=(idx)=>{
        setShow(true)
        setIndex(idx)
    }
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
            <Modal show={show} onHide={() => setShow(false)} centered
                dialogClassName="post_modal"
            >
                <X onClick={() => setShow(false)} variant="white" className="post_modal_close_btn"  />
                <UserPostCarousal posts={userPosts} idx={index}/>
                
            </Modal>

            <Container fluid >
                <Row style={{justifyContent: "center"}}>
                    { userPosts.map((post, idx)=> {
                        return (
                            <Col key={post.id} sm={4} 
                            className="user_post_square_wrapper" 
                            onClick={()=>handleClick(idx)}
                            >
                                <Image 
                                    className="user_post_square_img" 
                                    src={`${backendAPI}/${post.url}`} 
                                    onError={handleImgErr} 
                                />

                                <div className="user_post_square_hover_overlay">
                                </div>
                                <div className="user_post_square_text">
                                    <HeartFill className="me-1"/>
                                    {post.desc.likes.length}
                                    <ChatFill className="ms-4 me-1"/>
                                    {post.comments.length}
                                </div>
                                
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </>
    )
}
export default UserPostList