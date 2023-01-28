import UserPostList from "../posts/UserPostList"
import { useSelector } from "react-redux"
import { currentUser } from "./userSlice"
import { selectUserbyId } from '../users/usersSlice'

import ProfileHeader from "./ProfileHeader"
const Profile = ({userId}) => {
    
    const currUser=useSelector(currentUser)
    const user=useSelector(state=>selectUserbyId(state, userId))
    console.log(user)
    return (
        <div className="list-900" >
            {currUser ? 
                <>
                    <ProfileHeader user={currUser} isCurrUser={currUser.id===user.id}/>
                    <div style={{textAlign: "left"}}>{currUser.bio}</div>
                </>
                : 
                <>
                    <ProfileHeader user={user} isCurrUser={false}/>
                    <div style={{textAlign: "left"}}>{user.bio}</div>
                </>
            }
        
            <UserPostList userId={user.id} />
        </div>  

    )
    
}
export default Profile