import { useState } from 'react';
import { Card, OverlayTrigger, Tooltip, Modal, Nav } from "react-bootstrap";
import {  ThreeDots, Heart } from "react-bootstrap-icons"
import Like from './Like';

import EditPost from './EditPost';

const Post =({post, currUser, setUserPostsCB})=>{
    
    console.log("in post "+post.id)
    // console.log(post)
    const [edit, showEdit] = useState(false)

    return (
        <>
            
            <Modal show={edit} onHide={() => showEdit(false)}>
                <EditPost post={post} />
            </Modal>
          
            <Card>
                <Card.Header>
                    {/* <Card.Title className="card_header"  as='button' onClick={()=>setUserPostsCB(post.owner)}> */}
                    <Nav className="container-fluid">
                        <Nav.Item className="transparent_button"  as='button' onClick={()=>setUserPostsCB(post.owner)}>
                            {post.owner.name}
                        </Nav.Item>
                        
                        <Nav.Item className="ms-auto transparent_button" as="button" onClick={()=>showEdit(true)}>
                            <ThreeDots style = {{transform: 'rotate(90deg)'}}  /> 
                        </Nav.Item>
                
                    </Nav>
   
        
                </Card.Header>
                <div className="square_card_600" >
                    <Card.Img style={{width: '100%', height: '100%', objectFit: 'cover'}} variant="top" src={`http://localhost:3000/${post.url}`} />
                </div>
                <Card.Text className="card_likes" >
                
                <OverlayTrigger placement="top" overlay={ 
                    <Tooltip> 
                        { post.likes.length===0 ? <div>No like yet.</div>:
                            post.likes.map(like=><div key={like.user.id}>{like.user.name}</div>)}
                    </Tooltip>
                }>
            
                <span style={{paddingLeft:"15px"}}>
                    { currUser?  <Like currUser={currUser} likes={post.likes} postId={post.id}/> : <Heart /> }
                    {" "} {post.likes.length} likes
                </span>

                
                </OverlayTrigger>
                </Card.Text>
                <Card.Text className="card_desc" style={{paddingLeft:"15px"}}> 
                    {post.desc} 
                </Card.Text>
            </Card> 
 
          </>
    )
}
export default Post