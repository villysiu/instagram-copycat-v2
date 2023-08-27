
import EditProfileButton from "../editUser/EditProfileButton"
import Avatar from "./Avatar"

const ProfileHeader=({user, userPostsCount })=>{

    // console.log(user)
    
    return(
        
        <>
            <div className="profile_header_wrapper">
                <div className="profile_header_left">
                    <div className="profile_avatar_wrapper">
                        <Avatar avatar={user.avatar} name={user.name} />
                    </div>
                </div>
                <div className="profile_header_right">
                    <div className="profile_user_wrapper">
                        <div className="profile_username me-4">
                            {user.name}
                        </div>
                        <div className="profile_user_email me-4">
                            ({user.email})
                        </div>
                        <EditProfileButton user={user} />
                    </div>
                    <div className='bold_font'> {userPostsCount} posts</div>
                    <div className="bio">{user.bio}</div> 
                    
                </div>
             </div>

             
        </>
    )
}
export default ProfileHeader