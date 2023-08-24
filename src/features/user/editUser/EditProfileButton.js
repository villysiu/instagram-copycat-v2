import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"
const EditProfileButton = ({user}) => {
    const [show, setShow] = useState(false)
    const currUser = useSelector(state => state.users.currUser.currUser)

    if(!currUser) 
    return null
    return(
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="edit_profile_modal">
                <EditProfile setShow={setShow} currUser={user}/> 
            </Modal>
    
            {
            currUser.id===user.id && 
                <Button variant="light" size="sm" className="profile_edit_button" onClick={()=>setShow(true)}>Edit Profile</Button>
            }
        </>
    )
}
export default EditProfileButton