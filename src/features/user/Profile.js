import UserPostList from "../posts/UserPostList"
import { useSelector } from "react-redux"
import { currentUser } from "./userSlice"
import { selectUserbyId } from '../users/usersSlice'
import EditProfileButton from "./EditProfileButton"
const Profile = ({userId}) => {
    
    const currUser=useSelector(currentUser)
    const user=useSelector(state=>selectUserbyId(state, userId))
    console.log(user)
    return (
        <>
        {currUser ? 
        <>
            <h4>{currUser.name}</h4> 
            {currUser.id===user.id && <EditProfileButton /> }
            {currUser.bio}
            </>
            : 
            <>
            <h4>{user.name}</h4> 
            {user.bio}
            </>
        }

       <br/>
            <UserPostList userId={user.id} />
           
        </>
    )
    
}
export default Profile