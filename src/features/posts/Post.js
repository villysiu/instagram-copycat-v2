import { useState } from 'react';
import { Card, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import {  ThreeDots, Heart } from "react-bootstrap-icons"
import { useDispatch } from 'react-redux';
import Like from './Like';
import { likeAPost, unlikeAPost } from './postsSlice'
import EditPost from './EditPost';

const Post =({post, user})=>{
    console.log("in post")
    console.log(post)
    const [show, setShow] = useState(false)
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <EditPost post={post} />
            </Modal>
            <Card id="card" style={{ margin: '15px'}}>
                <Card.Title className="card_header">
                    <span>{post.owner_name} </span>
                    <span>{user && user.id===post.owner_id && <ThreeDots style = {{transform: 'rotate(90deg)'}}  onClick={()=>setShow(true)}/> }</span>
                </Card.Title>

                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                
                <Card.Text className="card_likes" >
                
                <OverlayTrigger placement="top" overlay={ 
                <Tooltip > 
                { post.liked_users.length===0 ? <div>No like yet.</div>:
                    post.liked_users.map(u=><div key={u.liked_user_id}>{u.liked_user_name}</div>)}
                </Tooltip>}>
            
                <span>
                    { user?  <Like user={user} liked_users={post.liked_users} post_id={post.photo_id}/> : <Heart /> }
                    {" "} {post.liked_users.length} likes
                </span>

                
            </OverlayTrigger>



                </Card.Text>
                <Card.Text className="card_desc"> {post.desc} </Card.Text>
            </Card> 
 
          </>
    )
}
export default Post