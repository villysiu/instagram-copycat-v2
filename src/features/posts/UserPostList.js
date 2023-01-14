import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
import { Container, Row, Col, Image} from "react-bootstrap"

// import { currentUser } from "../user/userSlice"
const UserPostList = ({user}) => {
    const posts=useSelector(state=>selectPostsbyUserId(state, user.id))
    console.log(posts)

    return(
        <>
            <h5>Posts by {user.name}</h5>
            
            <Container style={{maxWidth: '600px', margin:'0' }}>
                <Row >
                    { posts.map(post => {
                        return <Col key={post.id} xs={4} className="square_card_200">
                           
                            <Image style={{ width: '100%', height:'100%', objectFit: 'cover' }} src={`http://localhost:3000/${post.url}`} />
                                
                            </Col>
                    })}
                </Row>
            </Container>
    

        </>
        
    )
}
export default UserPostList