import UserPostList from "../posts/UserPostList"
import { useSelector } from "react-redux"
import { currentUser } from "./userSlice"
import { selectUserbyId } from '../users/usersSlice'
import EditProfileButton from "./EditProfileButton"
import { Navbar } from "react-bootstrap"
const Profile = ({userId}) => {
    
    const currUser=useSelector(currentUser)
    const user=useSelector(state=>selectUserbyId(state, userId))
    console.log(user)
    return (
        <>
        {currUser ? 
        <>
            <Navbar>
            {/* {currUser.avator} */}
                <Navbar.Brand> {currUser.name}</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    {currUser.id===user.id && <EditProfileButton /> }
                </Navbar.Collapse>
        </Navbar>
        
            
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