import { useState } from 'react';
import { Card } from 'react-bootstrap';
import {  ThreeDots } from "react-bootstrap-icons"
import { useDispatch } from 'react-redux';
import Like from './Like';
import { likeAPost, unlikeAPost } from './postsSlice'

const Post =(params)=>{
    console.log("in post")
    const {photo_id, url, desc, owner_name, liked_users, user_id} = params
    const [redHeart, toggleHeart]=useState(liked_users.includes(user_id))
    const dispatch=useDispatch()
    const toggleHeartCB = ()=>{
        if(redHeart){
            const like_id=liked_users.find(user=>user.liked_user_id===user_id)
            dispatch(unlikeAPost(photo_id, like_id))
        }
        else{
            dispatch(likeAPost(photo_id))
        }
        toggleHeart(prev=>!prev)
    }
    return (
       
            <Card id="card">
                <Card.Title className="card_header">
                    <span>{owner_name} </span>
                    <span><ThreeDots style = {{transform: 'rotate(90deg)' }} /> </span>
                </Card.Title>

                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${url}`} />
                
                <Card.Text className="card_likes" >
                    <Like redHeart={redHeart} toggleHeartCB={toggleHeartCB} />
                    {" "} {liked_users.length} likes</Card.Text>
                <Card.Text className="card_desc"> {desc} </Card.Text>
            </Card> 
 
          
    )
}
export default Post