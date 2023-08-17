import { ThreeDotsVertical } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import EditPostButton from "../editPost/EditPostButton";
import DeletePost from "../editPost/DeletePost";
import { useSelector } from 'react-redux';

const PostDropdown = ({post}) =>{
    // console.log("in Post dropdown")
    const title = (<ThreeDotsVertical /> );
    const currUserId = useSelector(state=> state.users.currUser.id)

    if(!currUserId || currUserId!==post.owner.id){
        return null
    }
    return (
        <NavDropdown title={title}>
            <EditPostButton post={post} />
            <NavDropdown.Divider />
            <DeletePost postId={post.id} currUserId={currUserId} />
        </NavDropdown>
    )
   
}
export default PostDropdown