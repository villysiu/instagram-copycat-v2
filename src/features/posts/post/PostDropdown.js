import { ThreeDots } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import EditPostPan from "../editPost/EditPostPan";
import DeletePost from "../DeletePost";
const PostDropdown = ({postId}) =>{
    const title = (<h3><ThreeDots style = {{transform: 'rotate(90deg)'}}  /> </h3>);
    return (
 
        <NavDropdown title={title} >
            <EditPostPan postId={postId}/>
        
            <NavDropdown.Divider />

            <DeletePost postId={postId} />
            
        
        </NavDropdown>
    )
}
export default PostDropdown