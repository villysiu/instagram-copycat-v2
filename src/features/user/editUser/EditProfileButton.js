import { Button, Modal } from "react-bootstrap"
import { useState } from "react"

import EditProfile from "./EditProfile"
const EditProfileButton = ({user}) => {
    const [show, setShow] = useState(false)

    return(
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="edit_profile_modal">
                <EditProfile setShow={setShow} currUser={user}/> 
            </Modal>
    
            <Button variant="light" size="sm" className="profile_edit_button" onClick={()=>setShow(true)}>Edit Profile</Button>
        </>
    )
}
export default EditProfileButton