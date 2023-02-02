import { ThreeDotsVertical } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import EditPostButton from "../editPost/EditPostButton";
import DeletePost from "../editPost/DeletePost";
const PostDropdown = ({postId}) =>{
    const title = (<ThreeDotsVertical className="me-3" /> );
    return (
 
        <NavDropdown title={title} >
            <EditPostButton postId={postId}/>
        
            <NavDropdown.Divider />

            <DeletePost postId={postId} />
            
        
        </NavDropdown>
    )
}
export default PostDropdown