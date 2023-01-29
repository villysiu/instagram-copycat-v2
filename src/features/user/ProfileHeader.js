import { Navbar, Image } from "react-bootstrap"
import EditProfileButton from "./EditProfileButton"

const ProfileHeader=({user, bio, isCurrUser})=>{
    return(
        <>
        <Navbar>
            <Navbar.Brand>
            {user.avator && <Image className="round_avator thumbsize" src={`http://localhost:3000/${user.avator}`} /> }
             {user.name}</Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
                {isCurrUser && <EditProfileButton /> }
            </Navbar.Collapse>
        </Navbar>
        <div style={{textAlign: "left"}}>{bio}</div>
        </>
    )
}
export default ProfileHeader