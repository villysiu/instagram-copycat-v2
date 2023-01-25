import { Navbar } from 'react-bootstrap';
import PostDropdown from './PostDropdown';
import { useSelector } from 'react-redux';
import { currentUser } from '../../user/userSlice';

export const PostHeader=({owner, postId, showProfileCB})=>{
    const currUser=useSelector(currentUser)
    return (
        <Navbar>
            <Navbar.Brand className="transparent_button" as="button" onClick={()=>showProfileCB(owner.id)}>
                {owner.name}
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
                {currUser && currUser.id===owner.id && 

                    <PostDropdown postId={postId}/>
                    
                } 
            </Navbar.Collapse>
        </Navbar>
    )
}