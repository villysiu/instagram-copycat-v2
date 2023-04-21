import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import { useSelector } from "react-redux"
import EditProfile from "./EditProfile"
import { currentUserId } from "../userSlice"
import { Spinner } from "react-bootstrap"
const EditProfileButton = ({userId}) => {
    const [show, setShow] = useState(false)

    const userStatus = useSelector(state => state.user.status)
    const currUserId = useSelector(currentUserId)

    if(!currUserId && userStatus==="loading")
        return (<Spinner />)
        
    return(
        <>
      
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="modal-dialog-centered">
                <EditProfile setShow={setShow} /> 
            </Modal>
    
            {currUserId===userId && 
                <Button variant = "light" onClick={()=>setShow(true)}>Edit Profile</Button>
            }
        </>
    )
}
export default EditProfileButton