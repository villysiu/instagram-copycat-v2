import AddComment from "../comment/AddComment"
import Comment from "../comment/Comment"
import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import PostDropdown from "../PostDropdown"
import PostPopupHeader from "./PostPopupHeader"
export const PostPopupRight = ({post}) => {
    
    // const comments = post.comments.filter(c=>c.id!==post.desc)
    const postCreatedAt = new Date(post.created_at *1000)
                            .toLocaleDateString({},
                            {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
                          )
    
    return (
        <>
            <div className='flex_space_between'>
                <PostPopupHeader author={post.owner} />
                <PostDropdown post={post}/>
            </div>
            <div className="post_popup_body px-2 border-top">
                <div className="flex_row py-3">
                    <Comment comment={post.desc} postId={post.id} descId={post.desc.id}/>
                </div>
                {post.comments.map((comment, idx)=>{
                    return (
                        <div className="flex_row py-3" key={idx}>
                            <Comment comment={comment} postId={post.id} descId={post.desc.id}/>
                        </div>
                    )
                })}
            </div>
            
            <div>
                <div className='flex_row_center p-2 border-top'>
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