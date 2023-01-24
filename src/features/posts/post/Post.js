import { Container, Card } from "react-bootstrap"
import { PostHeader } from "./PostHeader"

import Desc from "./Desc"
import Likes from "./Likes"

const Post = ({ post, handleClick }) => {
    

    
    return (
        <>
            
            <Card key={post.id} className='mb-3' >
            <Card.Title>
                <PostHeader owner={post.owner} postId={post.id} handleClick={handleClick}/>
            </Card.Title>
            
            <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
            
             <Likes likes={post.likes} postId={post.id} />
        
            <Desc owner={post.owner.name} desc={post.desc} />        
            {/* <Comments comments={posts.comments} />     */}
       
                </Card>
        </>
    )
}
export default Post