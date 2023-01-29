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
                    <ProfileHeader user={currUser} bio={currUser.bio} isCurrUser={currUser.id===user.id}/>
                : 
                    <ProfileHeader user={user} bio={user.bio} isCurrUser={false}/>
            }
            <UserPostList userId={user.id} />
        </div>  

    )
    
}
export default Profile