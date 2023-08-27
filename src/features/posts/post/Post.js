import { useState } from "react"
import PostImg from "./PostImg"
import PostTime from "./PostTime"
import PostDropdown from "./PostDropdown"
import Desc from "./Desc"
import LikeHeart from "./like/LikeHeart"
import LikeCount from "./like/LikeCount"
import PostPopup from "./postPopup/PostPopup"
import { Modal, Spinner } from "react-bootstrap"
import { ChatDots, X } from "react-bootstrap-icons"

// import { UserAuthor } from "../../user/user/UserAuthor"
import UsernameLink from "../../user/user/UsernameLink"
import UserAvatarLink from "../../user/user/UserAvatarLink"
import { CloseButton } from "react-bootstrap"
const Post = ({ post }) => {
    const [show, setShow] = useState(false)
    const [portrait, setPortrait] = useState(false)
    
    
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="post_modal" centered>
                <X className="post_modal_close_btn"  onClick={()=>setShow(false)}  />

                <PostPopup post={post} setShow={setShow} />
            </Modal>

            <div className="post pt-1 pb-4">
                <div className='post_header_wrapper'>
                    <div className="post_header">
                        <UserAvatarLink author={post.owner} />
                        <UsernameLink author={post.owner} />
                        <PostTime postTime={post.created_at} />
                    </div>
                    <PostDropdown post={post} />
                </div>
                <div className={portrait ? "post_img_wrapper portrait" : "post_img_wrapper" }>
                    <PostImg postUrl={post.url} setPortrait={setPortrait} />
               </div>
                <div className="pt-3 px-2">
                    <div className="post_wrapper_a">
                        <div className="me-1">
                            <ChatDots className="comment_icon" onClick={()=>setShow(true)}/>
                        </div>
                        <div className="mx-1">
                            <LikeHeart desc={post.desc} postId={post.id} />
                        </div>
                        <div className="ms-1">
                            <LikeCount likes={post.desc.likes} />
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
export default Post