import PostImg from "./PostImg"
import { PostHeader } from "./PostHeader"
import Comments from "./Comments"
import Desc from "./Desc"
import LikeFeature from "./like/LikeFeature"
import AddComment from "./AddComment"



 
const Post = ({ post, handleClick }) => {

    return (
        
            <div className="ccard">
                <PostHeader postTime={post.created_at} ownerId={post.owner_id} postId={post.id} handleClick={handleClick}/>
              
                <PostImg postId={post.id} postUrl={post.url} />
                
                <div className="mx-2">
                    <LikeFeature likes={post.likes} postId={post.id} />
                    
                    <Desc ownerId={post.owner_id} desc={post.desc} />       
                    
                    <Comments comments={post.comments} />    
                    
                    <AddComment post_id={post.id} />
                </div>
            </div>
       
   
    )
}
export default Post