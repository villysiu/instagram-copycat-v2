import { ThreeDotsVertical } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import EditPostButton from "../editPost/EditPostButton";
import DeletePost from "../editPost/DeletePost";
import { useSelector } from 'react-redux';
import { currentUser } from '../../user/userSlice';
import { useMemo } from "react";

const PostDropdown = ({postId, ownerId}) =>{
    console.log("in Post dropdown")
    const title = (<ThreeDotsVertical className="me-3" /> );
    const currUser=useSelector(currentUser)
    return useMemo(()=>{
    return (
        <>
            {currUser && currUser.id===ownerId && 
                <NavDropdown title={title} >
                    <EditPostButton postId={postId}/>
                
                    <NavDropdown.Divider />

                    <DeletePost postId={postId} />
                    
                
                </NavDropdown>
            } 
            </>
         
    )
        },[currUser])
}
export default PostDropdown