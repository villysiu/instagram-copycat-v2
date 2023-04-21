
import EditProfileButton from "./editUser/EditProfileButton"
// import Avatar from "./Avatar"
// import UserName from "./UserName"
import UserAvatar from "./UserAvatar"
import Bio from "./Bio"



const ProfileHeader=( { user })=>{
    
    return(
        
        <div>
            <div className="profile_header">
                <UserAvatar userId={user.id} />
                <EditProfileButton userId={user.id} />
             </div>

            <Bio bio={user.bio} />
        </div>
    )
}
export default ProfileHeader