import { Card } from 'react-bootstrap';
const Post =(params)=>{
    console.log("in post")
    const {url, desc, owner_name} = params
    return (
       
            <Card style={{ width: '18rem' }}>
                <Card.Title>{owner_name}</Card.Title>
                <Card.Img style={{size: 'cover'}} variant="top" src={`http://localhost:3000/${url}`} />
                <Card.Text> {desc} </Card.Text>
            </Card> 
 
          
    )
}
export default Post