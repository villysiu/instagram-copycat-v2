import { Card } from 'react-bootstrap';
import {  ThreeDots } from "react-bootstrap-icons"
import Like from './Like';
import LikeCounter from './LikeCounter';
const Post =(params)=>{
    console.log("in post")
    const {url, desc, owner_name, liked_users} = params
    return (
       
            <Card id="card">
                <Card.Title className="card_header">
                    <span>{owner_name} </span>
                    <span><ThreeDots style = {{transform: 'rotate(90deg)' }} /> </span>
                </Card.Title>

                <Card.Img className="card_img" variant="top" src={`http://localhost:3000/${url}`} />
                
                <Card.Text className="card_likes"><Like /> {liked_users.length} likes</Card.Text>
                <Card.Text className="card_desc"> {desc} </Card.Text>
            </Card> 
 
          
    )
}
export default Post