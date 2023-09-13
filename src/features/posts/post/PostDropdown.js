import { ThreeDotsVertical } from "react-bootstrap-icons";
import { NavDropdown } from "react-bootstrap";
import EditPostButton from "../editPost/EditPostButton";
import DeletePost from "../editPost/DeletePost";
import { useSelector } from 'react-redux';
import { useState } from "react";
const PostDropdown = ({post}) =>{
    // console.log("in Post dropdown")
    const title = (<ThreeDotsVertical /> );
    const currUser = useSelector(state=>state.users.currUser.currUser)
   
    if(!currUser || currUser.id!==post.owner.id){
        return null
    }
    // const ddd=()=>{
    //     const elem = document.getElementById("rrr");
    //     elem.click();
    // }
    
    return (
        <NavDropdown title={title} style={{position: 'unset'}} id="dots">
            <EditPostButton post={post} />
            <NavDropdown.Divider />
            <DeletePost postId={post.id} currUserId={currUser.id} />
            <NavDropdown.Divider />
            <NavDropdown.Item 
                onClick={()=>document.getElementById("dots").click()}
            >Cancel</NavDropdown.Item>
        </NavDropdown>
    )
   
}
export default PostDropdown