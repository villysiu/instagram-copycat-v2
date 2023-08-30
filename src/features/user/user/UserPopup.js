import {Row, Col, Container, Image} from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "../../posts/postsSlice"
import { backendAPI } from "../../../app/helper"
import placeholder from "../../../images/X (1).png"
import Avatar from "../profile/Avatar"
import { Link } from "react-router-dom"

const UserPopup = ({author})=>{
    const fisrt3Posts=useSelector(state=>selectPostsbyUserId(state, author.id).slice(0,3))
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    const ProfileLink = ({children})=>{
        return (
            <Link className="link_black" to={`/users/${author.id}`}>
                {children}
            </Link>
        )
    }
    return (
  
        <div >
            <div className="flex_row_center m-2">
                <div className="me-2 user_popup_avatar_wrapper">
                    <ProfileLink children={ 
                        <Avatar avatar={author.avatar} name={author.name} />
                    } />
                </div>
                <ProfileLink children={ 
                    <div style={{fontSize: '16px', fontWeight: 'bold'}}>{author.name}</div>
                } />
            </div>
            <Container>
                <Row>
                { fisrt3Posts.map((post, idx)=> {
                    return (
                        <Col key={idx} className="user_popover_img_wrapper">
                            <Image 
                                className="user_post_square_img" 
                            
                                src={`${backendAPI}/${post.url}`} 
                                onError={handleImgErr} 
                            />
                        </Col>
                    )
                })}
                </Row>
            </Container>
            <div style={{height: '1rem'}}></div>
        </div>
         
    )
}
export default UserPopup