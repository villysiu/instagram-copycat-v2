import { useState } from 'react';
import { Card } from 'react-bootstrap';
import {  ThreeDots, Heart } from "react-bootstrap-icons"
import { useDispatch } from 'react-redux';
import Like from './Like';
import { likeAPost, unlikeAPost } from './postsSlice'

const Post =(params)=>{
    console.log("in post")
    const {photo_id, url, desc, owner_name, liked_users, user} = params
    
    return (
       
            <Card id="card">
                <Card.Title className="card_header">
                    <span>{owner_name} </span>
                    <span><ThreeDots style = {{transform: 'rotate(90deg)' }} /> </span>
                </Card.Title>

                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${url}`} />
                
                <Card.Text className="card_likes" >
                    { user?  <Like user={user} liked_users={liked_users} photo_id={photo_id}/> : 
                    <Heart />
                    }
                    {" "} {liked_users.length} likes
                </Card.Text>
                <Card.Text className="card_desc"> {desc} </Card.Text>
            </Card> 
 
          
    )
}
export default Post