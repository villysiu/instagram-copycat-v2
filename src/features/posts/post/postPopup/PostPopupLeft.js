import { backendAPI } from "../../../../app/helper"
import { useState } from "react"
import placeholder from "../../../../images/X (1).png"
import PostAuthor from "../PostAuthor"
import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import PostImg from "../PostImg"
import AddComment from "../comment/AddComment"
const PostPopupLeft = ({post, desc}) =>{
    const [portrait, setPortrait] = useState(false)
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    return (
        <>
            <div className='d-block d-md-none' >
                <div className="post_modal_user">
                    <PostAuthor author={post.owner} />
                </div>
            </div>

            <div className={portrait ? "post_modal_img_wrapper_portrait" : "post_modal_img_wrapper" }>
                <PostImg postUrl={post.url} setPortrait={setPortrait} />
            </div>

            <div className='d-block d-md-none' >
                <div className='post_modal_like_wrapper p-2'>
                    <div className="me-1">
                        <LikeHeart likes={desc.likes} commentId={desc.id} postId={post.id} />
                    </div>  
                    <div className="ms-1">
                        <LikeCount likes={desc.likes} />
                    </div>  
                </div>
                <div>
                    <AddComment postId={post.id}/>
                </div>
            </div>
        </>
    )
}
export default PostPopupLeft