
import EditProfileButton from "./editUser/EditProfileButton"
import Avatar from "./Avatar"
import UserName from "./UserName"

import Bio from "./Bio"



const ProfileHeader=( { user })=>{
    
    return(
        
        <div>
            <div className="p-2 profile_header">
                <div style={{display: "flex", alignItems: "center"}}>
                    <Avatar userId={user.id} initialStyle={"initialStyle_lg"} circleSize={"thumbsize_lg"} />
                    <UserName userId={user.id} nameSize={"25px"} />
                </div>
                <EditProfileButton userId={user.id} />
             </div>

            <Bio bio={user.bio} />
        </div>
    )
}
export default ProfileHeader