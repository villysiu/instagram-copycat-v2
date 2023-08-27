import { useDispatch } from "react-redux"
import { deleteAPost } from "../postsSlice"
import { Modal, NavDropdown, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const DeletePost = ({postId, currUserId}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [showModal, setShowModal]=useState(false)

    const handleDelete=e=>{
        e.preventDefault()
        dispatch(deleteAPost(postId))
        navigate(`/instagram-copycat-v2/users/${currUserId}`);
    }
    return ( 
        <>
        <Modal show={showModal} onHide={()=>setShowModal(false)} centered>
        
            <Modal.Body>Are you sure to delete?? </Modal.Body>
            <Modal.Footer>
                <Button variant="light" size="sm" onClick={()=>setShowModal(false)}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
        </Modal>

        <NavDropdown.Item onClick={()=>setShowModal(true)} style={{color: "red"}}>
            Delete
        </NavDropdown.Item>
        </>
    )
}
export default DeletePost