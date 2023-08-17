import { useEffect, useState } from "react"
import PostImg from "./PostImg"
import PostTime from "./PostTime"
import PostDropdown from "./PostDropdown"
import SeeCommentsLink from "./comment/SeeCommentsLink"
import Desc from "./Desc"
import LikeHeart from "./like/LikeHeart"
import LikeCount from "./like/LikeCount"
import AddCommentIcon from "./comment/AddCommentIcon"
import PostAuthor from "./PostAuthor"
import PostPopup from "./postPopup/PostPopup"
import { Modal, Spinner } from "react-bootstrap"
import { ChatDots } from "react-bootstrap-icons"

const Post = ({ post }) => {
    const [show, setShow] = useState(false)
    const [portrait, setPortrait] = useState(false)
    const [desc, setDesc] = useState("")
    // console.log(post)
    // console.log(desc)
    // const desc=post.comments.find(c=>c.id===post.desc)
    useEffect(()=>{
        setDesc(post.comments.find(c=>c.id===post.desc))   
    })
    if(!desc)
        return <Spinner />
    
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="post_modal" centered>
                <PostPopup post={post} setShow={setShow} />
            </Modal>

            <div className="post py-4">
                <div className='post_header'>
                    <div className="post_header_l">
                        <PostAuthor author={post.owner} />      
                        <PostTime postTime={post.created_at} />
                    </div>
                    <PostDropdown post={post}/>
                    
                </div>
                <div className={portrait ? "post_img_wrapper portrait" : "post_img_wrapper" }>
                    <PostImg postUrl={post.url} setPortrait={setPortrait} />
               </div>
                <div className="pt-2 px-2">
                    <div className="post_wrapper_a">
                        <div className="me-1">
                            <div onClick={()=>setShow(true)}>
                                <ChatDots className="comment_icon" />
                            </div>
                        </div>
                    
                      
                        <div className="mx-1">
                            <LikeHeart likes={desc.likes} commentId={desc.id} postId={post.id} />
                        </div>
                        <div className="ms-1">
                            <LikeCount likes={desc.likes} />
                        </div> 
                       
                
                    </div>
                    <div className="mt-1">
                    <Desc desc={desc} />   
                    </div>
                    
                    <div className="mt-1">
                        {post.comments.length>1 && 
                        <div className="comment_wrapper hide_link" onClick={()=>setShow(true)}>
                            view all {post.comments.length-1} comments
                        </div>
                        }
                    </div>

                </div>
            </div>
        </>
   
    )
}
export default Post