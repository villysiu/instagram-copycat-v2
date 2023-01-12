import { useState } from 'react';
import { Card, OverlayTrigger, Tooltip, Modal, Button } from "react-bootstrap";
import {  ThreeDots, Heart } from "react-bootstrap-icons"
import Like from './Like';

import EditPost from './EditPost';

const Post =({post, currUser, setUserPostsCB})=>{
    console.log("in post "+post.id)
    const [edit, showEdit] = useState(false)

    return (
        <>
            <Modal show={edit} onHide={() => showEdit(false)}>
                <EditPost post={post} />
            </Modal>

            <Card id="card" style={{ margin: '15px'}}>
                <Card.Title className="card_header">
                    <span><Button className="b-owner" onClick={()=>setUserPostsCB({id: post.owner.id, name:post.owner.name} )} >{post.owner.name} </Button></span>
                    <span>{currUser && currUser.id===post.owner_id && <ThreeDots style = {{transform: 'rotate(90deg)'}}  onClick={()=>showEdit(true)}/> }</span>
                </Card.Title>

                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${post.url}`} />
                
                <Card.Text className="card_likes" >
                
                <OverlayTrigger placement="top" overlay={ 
                    <Tooltip> 
                        { post.likes.length===0 ? <div>No like yet.</div>:
                            post.likes.map(like=><div key={like.user.id}>{like.user.name}</div>)}
                    </Tooltip>
                }>
            
                <span>
                    { currUser?  <Like currUser={currUser} likes={post.likes} postId={post.id}/> : <Heart /> }
                    {" "} {post.likes.length} likes
                </span>

                
            </OverlayTrigger>



                </Card.Text>
                <Card.Text className="card_desc"> {post.desc} </Card.Text>
            </Card> 
 
          </>
    )
}
export default Post