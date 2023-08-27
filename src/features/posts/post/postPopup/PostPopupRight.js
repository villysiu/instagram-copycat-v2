import { useState, useEffect } from "react"
import AddComment from "../comment/AddComment"
import Comment from "../comment/Comment"
import UsernameLink from "../../../user/user/UsernameLink"
import UserAvatarLink from "../../../user/user/UserAvatarLink"
import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import PostDropdown from "../PostDropdown"
export const PostPopupRight = ({post}) => {
    
    // const comments = post.comments.filter(c=>c.id!==post.desc)
    const postCreatedAt = new Date(post.created_at *1000)
                            .toLocaleDateString({},
                            {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
                          )
    
    return (
        <>
            <div className='post_popup_r_header_wrapper p-3'>
                <div className="post_popup_r_header">
                    <UserAvatarLink author={post.owner} />
                    <UsernameLink author={post.owner} />
                </div>
                <PostDropdown post={post}/>
            </div>
            <div className="post_modal_body px-2 border-top">
                <div className="comment_wrapper">
                    <Comment comment={post.desc} postId={post.id} descId={post.desc.id}/>
                </div>
                {post.comments.map((comment, idx)=>{
                    return (
                        <div className="comment_wrapper" key={idx}>
                            <Comment comment={comment} postId={post.id} descId={post.desc.id}/>
                        </div>
                    )
                })}
            </div>
            
            <div>
                <div className='post_modal_like_wrapper border-top p-2'>
                    <div className="me-1">
                        <LikeHeart desc={post.desc} postId={post.id} />
                    </div>  
                    <div className="ms-1">
                        <LikeCount likes={post.desc.likes} />
                    </div>  
                    
                </div>
                <div className="light_gray_font mx-2">
                    {postCreatedAt}
                </div>
                <AddComment postId={post.id}/>
            
            </div>

        </>
    )
}
export default PostPopupRight