import { useDispatch } from "react-redux"
import { deleteAPost } from "./postsSlice"
import { NavDropdown } from "react-bootstrap"
const DeletePost = ({postId}) => {
    const dispatch=useDispatch()
    const handleDelete=e=>{
        e.preventDefault()
        dispatch(deleteAPost(postId))
    }
    return ( 
        <NavDropdown.Item onClick={handleDelete}>
            Delete
        </NavDropdown.Item>
    )
}
export default DeletePost