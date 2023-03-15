import { ThreeDotsVertical } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import EditPostButton from "../editPost/EditPostButton";
import DeletePost from "../editPost/DeletePost";
import { useSelector } from 'react-redux';
import { currentUserId } from "../../user/userSlice";

const PostDropdown = ({postId, ownerId}) =>{
    // console.log("in Post dropdown")
    const title = (<ThreeDotsVertical className="me-3" /> );
    const currUserId=useSelector(currentUserId)
   
    if(currUserId && currUserId===ownerId)
        return (
            <NavDropdown title={title} >
                <EditPostButton postId={postId}/>
                <NavDropdown.Divider />
                <DeletePost postId={postId} currUserId={currUserId} />
            </NavDropdown>
        )
   
}
export default PostDropdown