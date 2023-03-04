import { Navbar, Nav } from "react-bootstrap"
import EditProfileButton from "./editUser/EditProfileButton"
import Avatar from "./Avatar"
import UserName from "./UserName"
import { useSelector } from "react-redux"
import { currentUser } from "./userSlice"
import Bio from "./Bio"
const ProfileHeader=({user_id})=>{
    const currUser=useSelector(currentUser)
    return(
        <div className="m-3">
        <Navbar>
            <Navbar.Brand>
                <Nav>
                    <Avatar user_id={user_id} />
                    {/* <Nav.Item>{user.name}</Nav.Item> */}
                    <UserName user_id={user_id} />
               
                </Nav>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                {currUser && currUser.id=== user_id && <EditProfileButton user={currUser}/> }
            </Navbar.Collapse>
            
        </Navbar>
        <Bio user_id={user_id} />
        </div>
    )
}
export default ProfileHeader