import { Image } from "react-bootstrap"
import { PostHeader } from "./PostHeader"
import Comments from "./Comments"
import Desc from "./Desc"
import LikeFeature from "./like/LikeFeature"
import AddComment from "./AddComment"
import { useSelector } from "react-redux"

import { currentUser } from '../../user/userSlice';

 
const Post = ({ post, handleClick }) => {
    console.log("in Post")

    const currUser=useSelector(currentUser)

    // console.log(owner)

    return (
            // <Card className='mb-3'>
            <div className="ccard">
                <PostHeader owner_id={post.owner_id} postId={post.id} handleClick={handleClick}/>
              
                <Image className="card_img mb-1" variant="top" src={`http://localhost:3000/${post.url}`} />
                <div className="mx-2">
                    <LikeFeature likes={post.likes} postId={post.id} />
                    
                    <Desc owner_id={post.owner_id} desc={post.desc} />       
                    
                    <Comments comments={post.comments} />    
                    
                    {currUser && <AddComment post_id={post.id} /> }
                </div>
            </div>
   
    )
}
export default Post