import { useState } from 'react';
import { Card, OverlayTrigger, Tooltip, Modal, Button } from "react-bootstrap";
import {  ThreeDots, Heart } from "react-bootstrap-icons"
import Like from './Like';

import EditPost from './EditPost';

const Post =({post, user, setUserPostsCB})=>{
    console.log("in post "+post.photo_id)
    const [edit, showEdit] = useState(false)
    

    return (
        <>
            <Modal show={edit} onHide={() => showEdit(false)}>
                <EditPost post={post} />
            </Modal>

            <Card id="card" style={{ margin: '15px'}}>
                <Card.Title className="card_header">
                    <span><Button className="b-owner" onClick={()=>setUserPostsCB({id: post.owner_id, name:post.owner_name} )} >{post.owner_name} </Button></span>
                    <span>{user && user.id===post.owner_id && <ThreeDots style = {{transform: 'rotate(90deg)'}}  onClick={()=>showEdit(true)}/> }</span>
                </Card.Title>

                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                
                <Card.Text className="card_likes" >
                
                <OverlayTrigger placement="top" overlay={ 
                    <Tooltip> 
                        { post.liked_users.length===0 ? <div>No like yet.</div>:
                            post.liked_users.map(u=><div key={u.liked_user_id}>{u.liked_user_name}</div>)}
                    </Tooltip>
                }>
            
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