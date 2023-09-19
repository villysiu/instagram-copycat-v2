import { useState } from "react"
import { Modal, NavDropdown } from "react-bootstrap"
import EditPost from "./EditPost"

const EditPostButton = ({post}) =>{
    const [show, setShow] = useState(false)
    
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}
                dialogClassName="add_post_modal" centered>
                <EditPost post={post} setShow={setShow} />
            </Modal>
        
            <NavDropdown.Item onClick={()=>setShow(true)} >
                Edit Post
            </NavDropdown.Item>
        </>
    )
}
export default EditPostButton