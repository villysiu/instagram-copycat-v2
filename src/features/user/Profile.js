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
        <h2>{user.name}</h2> 
        {currUser && currUser.id===user.id && <EditProfileButton /> }

        {user.bio}
       <br/>
            <UserPostList userId={user.id} />
           
        </>
    )
    
}
export default Profile