import { Container, OverlayTrigger, Tooltip, Modal, Card } from "react-bootstrap"
import Like from "./Like"
import { Heart } from "react-bootstrap-icons"
import { useState } from "react"
import { useSelector } from "react-redux"
import { currentUser } from "../user/userSlice"
import { PostHeader } from "./PostHeader"
import EditPost from "./EditPost"

const Post = ({ post, showUserPostsCB }) => {
    const currUser=useSelector(currentUser);
    const [edit, showEdit] = useState(false);

    
    return (
        <Container fluid >
            <Modal show={edit} 
                onHide={() => showEdit(false)}
                dialogClassName="modal-60w">
                <EditPost post={post} />
            </Modal>

            <Card.Title>
                <PostHeader owner={post.owner} showEdit={showEdit} handleClick={()=>showUserPostsCB(post.owner)}/>
            </Card.Title>
            
                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                
                <Card.Text>
                    <OverlayTrigger placement="top" overlay={ 
                        <Tooltip> 
                            { post.likes.length===0 ? 
                                <div>No like yet.</div>:
                                post.likes.map(like=><div key={like.user.id}>{like.user.name}</div>)}
                        </Tooltip> }>
                        <span>
                            { currUser?  <Like currUser={currUser} likes={post.likes} postId={post.id}/> : <Heart /> }
                            {" "} {post.likes.length} likes
                        </span>
                    </OverlayTrigger>
                    </Card.Text>   
                    <Card.Text> <b>{post.owner.name}</b>{"  "}{post.desc}</Card.Text>
                            
                
       
                
        </Container>
    )
}
export default Post