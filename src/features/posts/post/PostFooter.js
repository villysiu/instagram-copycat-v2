
import Desc from "./Desc"
import LikeHeart from "./like/LikeHeart"
import LikeCount from "./like/LikeCount"
import PostPopup from "./postPopup/PostPopup"
import { Modal } from "react-bootstrap"
import { ChatDots, X } from "react-bootstrap-icons"
import { useState } from "react"
import ViewCommentLink from "./comment/ViewCommentLink"

const PostFooter = ({post}) =>{
    const [show, setShow] = useState(false)
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="post_modal" centered>
                <X className="post_modal_close_btn"  onClick={()=>setShow(false)}  />
                <PostPopup post={post} setShow={setShow} />
            </Modal>
 
            <div className="post_footer pt-3 px-2">
                <div className="flex_row_center">
                    <div className="me-1">
                        <ChatDots className="comment_icon" onClick={()=>setShow(true)}/>
                    </div>
                    <div className="mx-1">
                        <LikeHeart desc={post.desc} postId={post.id} />
                    </div>
                    <div className="ms-1" >
                        <b><LikeCount likes={post.desc.likes} /></b>
                    </div> 
                </div>
                <div className="mt-3">
                    <Desc desc={post.desc} />   
                </div>
                    
                <div className="mt-1">
                    <ViewCommentLink count={post.comments.length} setShow={setShow} />
                </div>
            </div>
        </>
    )
}
export default PostFooter