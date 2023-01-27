import { Card } from "react-bootstrap"
import { PostHeader } from "./PostHeader"

import Desc from "./Desc"
import Likes from "./Likes"
import { useSelector } from "react-redux"
import { selectUserbyId } from "../../users/usersSlice"
const Post = ({ post, handleClick }) => {
    const owner=useSelector(state=> selectUserbyId(state, post.owner_id))
    // console.log(owner)
    return (
        <>
            
            <Card className='mb-3' >
            <Card.Title>
                <PostHeader owner={owner} postId={post.id} handleClick={handleClick}/>
            </Card.Title>
            
            <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
            
             <Likes likes={post.likes} postId={post.id} />
        
            <Desc owner={owner.name} desc={post.desc} />        
            {/* <Comments comments={posts.comments} />     */}
       
                </Card>
        </>
    )
}
export default Post