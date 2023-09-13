import { useState, useEffect } from "react"
import { Container, Row, Col, Image, Modal, CloseButton} from "react-bootstrap"
import UserPostCarousal from "./post/UserPostCarousal"
import {Spinner} from "react-bootstrap"
import placeholder from "../../images/X (1).png"
import { backendAPI } from "../../app/helper"
import { HeartFill } from "react-bootstrap-icons"
import { X, ChatFill } from "react-bootstrap-icons"
import { fetchPostsByUserId } from "./postsSlice"
import { useDispatch, useSelector } from "react-redux"


const UserPostList = ({idToFetch}) => {
    console.log("userPostList")
    // const userPosts = useSelector(state=> state.posts.userPosts.posts)
    // const userPostStatus = useSelector(state=> state.posts.userPosts.status)
    // const userPostsUserId = useSelector(state=> state.posts.userPosts.userId)
    const {posts, status, userId} = useSelector(state=> state.posts.userPosts)
    const [show, setShow]=useState(false)
    const [index, setIndex] = useState(0)
    const dispatch = useDispatch()
    const handleClick=(idx)=>{
        setShow(true)
        setIndex(idx)
    }
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    useEffect(()=>{
        console.log("in user eddect")
        if(userId !== idToFetch)
            dispatch(fetchPostsByUserId(idToFetch))
    }, [])
    console.log(posts)

    if(posts.length===0 ){
        if(status === 'loading'){
            return <div><Spinner /></div>
        }
        else if(status === 'succeeded' ){
            return <div>User has no post.</div>
        }
    }   
    if(userId !== idToFetch)
        return <Spinner />
    
    return(
        <>
            <Modal show={show} onHide={() => setShow(false)} centered dialogClassName="post_modal">
                <X onClick={() => setShow(false)} variant="white" className="post_modal_close_btn"  />
                <UserPostCarousal posts={posts} idx={index}/>
                
            </Modal>

            <Container bsPrefix="user_posts_container">
                
                <Row bsPrefix="user_posts_row">
                    {/* <div style={{height: '500px'}}></div> */}
                    { posts.map((post, idx)=> {
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
                                    <HeartFill className="me-1"/> {post.desc.likes.length}
                                    <ChatFill className="ms-4 me-1"/> {post.comments.length}
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