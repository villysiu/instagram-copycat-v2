import { useState } from "react"
import { Modal, NavDropdown } from "react-bootstrap"
import EditPost from "./EditPost"
const EditPostPan = ({postId}) =>{
    const [edit, showEdit] = useState(false)
    return (
        <>
            <Modal show={edit} 
                onHide={() => showEdit(false)}
                dialogClassName="modal-60w">
                <EditPost postId={postId} />
            </Modal>
        
            <NavDropdown.Item onClick={()=>showEdit(true)} >
                Edit Post
            </NavDropdown.Item>
        </>
    )
}
export default EditPostPan