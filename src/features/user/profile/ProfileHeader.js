
import EditProfileButton from "../editUser/EditProfileButton"
import Avatar from "./Avatar"

import { useSelector } from "react-redux"
import Followers from "../followers/Followers"
import Following from "../followers/Following"
import FollowButton from "../followers/FollowButton"

const ProfileHeader=({user, userPostsCount })=>{

    // console.log(user)
    const currUser = useSelector(state => state.users.currUser.currUser)
    const ButtonHelper=() =>{
        if(!currUser) return null

        if(currUser.id === user.id) 
            return <EditProfileButton user={user} />

        return (
            <>{
                user.followers.some(follower=>follower.id===currUser.id) ?
                    <>Following Already </>
                    :
                    <FollowButton user={user} currUser={currUser} />
            }</>
        )      
    }
    return(
        
        <>
            <div className="profile_header_wrapper">
                <div className="profile_header_left">
                    <div className="profile_avatar_wrapper">
                        <Avatar avatar={user.avatar} name={user.name} />
                    </div>
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
                    <div style={{fontSize: '16px'}} className="flex_row_center my-3">
                        <div className="me-5"><b> {userPostsCount}</b> posts</div>
                        
                        <Followers followers={user.followers} />
                        <Following following = {user.following} />
                       

                    </div>
                    <div className="bio">{user.bio}</div> 
                    
                </div>
             </div>

             
        </>
    )
}
export default ProfileHeader