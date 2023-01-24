import UserPostList from "../posts/UserPostList"
import { useSelector } from "react-redux"
import { currentUser } from "./userSlice"
import EditProfileButton from "./EditProfileButton"
const Profile = ({user}) => {
    const currUser=useSelector(currentUser)
    
    return (
        <>
        <h2>{user.name}</h2> 
        {currUser.id===user.id && <EditProfileButton /> }

        {user.bio}
       <br/>
            <UserPostList userId={user.id} />
           
        </>
    )
    
}
export default Profile