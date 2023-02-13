import { Navbar, Nav } from "react-bootstrap"
import EditProfileButton from "./editUser/EditProfileButton"
import Avatar from "./Avatar"
import UserName from "./UserName"
const ProfileHeader=({user, bio, isCurrUser})=>{
    return(
        <div className="m-3">
        <Navbar>
            <Navbar.Brand>
                <Nav>
                    <Avatar avatar={user.avatar} name={user.name} />
                    <UserName name={user.name} />
               
                </Nav>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                {isCurrUser && <EditProfileButton /> }
            </Navbar.Collapse>
            
        </Navbar>
        <div style={{textAlign: "left"}}>{bio}</div>
        </div>
    )
}
export default ProfileHeader