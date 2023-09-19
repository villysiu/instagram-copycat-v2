import {Row, Col, Container, Image, Button} from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "../../posts/postsSlice"
import { backendAPI } from "../../../app/helper"
import placeholder from "../../../images/X (1).png"
import Avatar from "../profile/Avatar"
import { Link } from "react-router-dom"
import { memo } from "react"
import User from "../session/User"
import EditProfileButton from "../editUser/EditProfileButton"
import UnfollowButton from "../followers/UnfollowButton"
import FollowButton from "../followers/FollowButton"
const UserPopup = ({author})=>{
    console.log("UserPopup")
    console.log(author)
    const currUser = useSelector(state => state.users.currUser.currUser)
    const handleImgErr=(e)=>{
        e.target.src = placeholder
    }
    const ProfileLink = ({children})=>{
        return (
            <Link className="link_black" to={`../users/${author.id}`}>
                {children}
            </Link>
        )
    }
    const ButtonHelper=() =>{
        
        if(!currUser) {
            return (
                
                <User display={
                    <Button className='gray_btn'>Follow</Button>
                } />
               
            )
        }
        if(currUser.id === author.id) 
            return <EditProfileButton user={author} />

        return (
            <>{
                currUser.followings.some(f=>f.id===author.id) ?
                    <UnfollowButton userId={author.id} currUserId={currUser.id} />
                    :
                    <FollowButton userId={author.id} />
            }</>
        )      
       
    }
    return (
  
        <div style={{marginBottom: '1rem'}}>
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
            <div className="py-2 flex_row_center user_popup_details_wrapper">
            <div className="user_popup_details"  ><b className="blk"> {author.count}</b><br/> posts</div>
                <div className="user_popup_details" ><b> {author.followers.length}</b><br/>followers</div>
                <div className="user_popup_details" ><b> {author.followings}</b><br/>followings</div>

            </div>
            <Container>
                <Row>
                { author.photos.map((post, idx)=> {
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

            <div className="m-2"><ButtonHelper /></div>
        </div>
         
    )
}
const shouldComponentUpdate =(prevProps, nextProps) => {
    
    if (prevProps.author.id !== nextProps.author.id)
        return false      // will re-render
    return true         // do not re-render   
}
 export default memo(UserPopup, shouldComponentUpdate)
// export default UserPopup