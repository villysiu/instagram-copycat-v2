import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import EditProfile from "./EditProfile"
const EditProfileButton = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
    }
    return (
        <>
      
        <Modal show={show} onHide={()=>setShow(false)} dialogClassName="modal-dialog-centered">
            <EditProfile setShow={setShow} /> 
        </Modal>

        <Button variant = "light" onClick={handleClick}>Edit Profile</Button>
        </>
    )
}
export default EditProfileButton