import LikeFeature from "./like/LikeFeature"
import AddCommentIcon from './comment/AddCommentIcon'
const PostFooter = ({post}) =>{
    return (
        <div className="post_wrapper_a">
            <div className="me-2">
                <AddCommentIcon post={post} />
            </div>
        
            <LikeFeature likes={post.likes} postId={post.id} />
        </div>
  
    )
}
export default PostFooter