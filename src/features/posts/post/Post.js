import { useState } from "react"
import PostImg from "./PostImg"
import PostHeader from "./PostHeader"

import Desc from "./Desc"
import LikeHeart from "./like/LikeHeart"
import LikeCount from "./like/LikeCount"
import PostPopup from "./postPopup/PostPopup"
import { Modal, Spinner } from "react-bootstrap"
import { ChatDots, X } from "react-bootstrap-icons"
// import { useMemo } from "react"
import { memo } from "react"
const Post = ({ post }) => {
    const [show, setShow] = useState(false)
    const [portrait, setPortrait] = useState(false)
    
    console.log(post.id)
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="post_modal" centered>
                <X className="post_modal_close_btn"  onClick={()=>setShow(false)}  />
                <PostPopup post={post} setShow={setShow} />
            </Modal>

            <div className="post pt-1 pb-4">
                <PostHeader post={post} />
                <div className={portrait ? "post_img_wrapper portrait" : "post_img_wrapper" }>
                    <PostImg postUrl={post.url} setPortrait={setPortrait} />
               </div>
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
                    {
                        post.comments.length>0 && 
                        <div className="comment_wrapper hide_link" onClick={()=>setShow(true)}>
                            view all {post.comments.length} comments
                        </div>
                    }
                    </div>

                </div>
            </div>
        </>
   
    )
}
const areEqual = (prevProps, nextProps) => {
   
    if (prevProps.post.desc !== nextProps.post.desc ||
        prevProps.post.comments !== nextProps.post.comments) {
      return false                                    // will re-render
    }
    return true                                  // donot re-render   
  }
// export default Post
export default memo(Post, areEqual)