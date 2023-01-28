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
        <>
        {currUser ? 
            <>
                <ProfileHeader user={currUser} isCurrUser={currUser.id===user.id}/>
                {currUser.bio}
            
            </>
            : 
            <>
                <ProfileHeader user={user} isCurrUser={false}/>
                {user.bio}
            </>
        }

       <br/>
            <UserPostList userId={user.id} />
           
        </>
    )
    
}
export default Profile