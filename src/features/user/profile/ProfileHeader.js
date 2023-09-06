
import EditProfileButton from "../editUser/EditProfileButton"
import Avatar from "./Avatar"

import { useSelector } from "react-redux"
import FollowButton from "../followers/FollowButton"
import UnfollowButton from "../followers/UnfollowButton"
import FollowerWrapper from "../followers/FollowWrapper"
import FollowersList from "../followers/FollowersList"
import FollowingList from "../followers/FollowingList"
const ProfileHeader=({user, userPostsCount })=>{

    
    
    const currUser = useSelector(state => state.users.currUser.currUser)
    const ButtonHelper=() =>{
        if(!currUser) return null

        if(currUser.id === user.id) 
            return <EditProfileButton user={user} />

        return (
            <>{
                user.followers.some(follower=>follower.id===currUser.id) ?
                    <UnfollowButton userId={user.id} currUserId={currUser.id} />
                    :
                    <FollowButton userId={user.id} />
            }</>
        )      
    }
    const Content = () =>{
        return (
            <>
                <div style={{fontSize: '16px'}} className="flex_row_center ">
                    <div className="pro_data"><b className="blk"> {userPostsCount}</b> posts</div>
                    <FollowerWrapper list={user.followers} title="followers" children={
                        <FollowersList followers={user.followers} userId={user.id}/> 
                    } />
                    
                    <FollowerWrapper list={user.followings} title="followings" children={
                        <FollowingList followings={user.followings} userId={user.id} />
                    } />
                    
                </div>
            
                <div className="bio">{user.bio}</div> 
            </>
        )
    }
    return(
        
        <div className="profile_header_wrapper">
            <div className="flex_row">

                <div className="profile_avatar_wrapper">
                    <Avatar avatar={user.avatar} name={user.name} />
                </div>
               
                <div className="profile_header_right">
                    
                     <div className="profile_user_wrapper my-2">
                        <div className="profile_username me-4">
                            {user.name}
                        </div>
                        <div className="profile_user_email me-4">
                            ({user.email})
                        </div>
                        <div className="my-3">
                            <ButtonHelper />
                        </div> 
                    </div>

                    <div className="d-none d-md-block">
                        <Content />
                    </div>
                </div>
                
             </div>
             <div className='d-block d-md-none rev'>
                <Content />
            </div>

             
        </div>
    )
}
export default ProfileHeader