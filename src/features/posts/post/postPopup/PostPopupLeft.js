import { backendAPI } from "../../../../app/helper"
import { useState } from "react"
import placeholder from "../../../../images/X (1).png"
import { UserAuthor } from "../../../user/user/UserAuthor"
import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import PostImg from "../PostImg"
import AddComment from "../comment/AddComment"
const PostPopupLeft = ({post}) =>{
    const [portrait, setPortrait] = useState(false)
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    return (
        <>
            <div className='d-block d-md-none' >
                <div className="post_modal_user flex_row_center">
                    <UserAuthor author={post.owner} />
                </div>
            </div>

            <div className={portrait ? "post_modal_img_wrapper_portrait" : "post_modal_img_wrapper" }>
                <PostImg postUrl={post.url} setPortrait={setPortrait} />
            </div>

            <div className='d-block d-md-none' >
                <div className='post_modal_like_wrapper p-2'>
                    <div className="me-1">
                        <LikeHeart desc={post.desc} postId={post.id} />
                    </div>  
                    <div className="ms-1">
                        <LikeCount likes={post.desc.likes} />
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