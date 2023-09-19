import { useState } from "react"
import placeholder from "../../../../images/X (1).png"

import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import PostImg from "../PostImg"
import AddComment from "../comment/AddComment"
import PostPopupHeader from "./PostPopupHeader"
const PostPopupLeft = ({post}) =>{
    const [portrait, setPortrait] = useState(false)
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    return (
        <>
            <div className='d-block d-md-none p-2' >
                <PostPopupHeader author={post.owner} />
            </div>

            <div className={portrait ? "post_modal_img_wrapper_portrait" : "post_modal_img_wrapper" }>
                <PostImg postUrl={post.url} setPortrait={setPortrait} />
            </div>

            <div className='d-block d-md-none' >
                <div className='flex_row_center m-2'>
                    <div className="m-1">
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