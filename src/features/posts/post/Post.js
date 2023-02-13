import { Card } from "react-bootstrap"
import { PostHeader } from "./PostHeader"
import Comments from "./Comments"
import Desc from "./Desc"
import Likes from "./Likes"
import AddComment from "./AddComment"
import { useSelector } from "react-redux"

import { selectUserbyId } from "../../user/userSlice"
import { currentUser } from '../../user/userSlice';
const Post = ({ post, handleClick }) => {
    console.log("in Post")
    const owner=useSelector(state=> selectUserbyId(state, post.owner_id))
    const currUser=useSelector(currentUser)
    // console.log(post)
    return (
            <Card>
               
                <PostHeader owner={owner} postId={post.id} handleClick={handleClick}/>
              
                <Card.Img className="card_img mb-1" variant="top" src={`http://localhost:3000/${post.url}`} />
                
                <Likes likes={post.likes} postId={post.id} />
            
                <Desc owner={owner.name} desc={post.desc} />        
                <Comments comments={post.comments} />    
                {currUser && <AddComment post_id={post.id} /> }
            </Card>
   
    )
}
export default Post