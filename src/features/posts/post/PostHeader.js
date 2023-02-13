import { Navbar } from 'react-bootstrap';
import PostDropdown from './PostDropdown';
import { useSelector } from 'react-redux';
import { currentUser } from '../../user/userSlice';
import UserName from '../../user/UserName';
import Avatar from '../../user/Avatar';
export const PostHeader=({owner, postId, handleClick})=>{
    console.log("in PostHeader")
    const currUser=useSelector(currentUser)
   
    return (
        <Navbar>
           
            <Navbar.Brand className="transparent_button" as="button" onClick={handleClick}>
                <Avatar avatar={owner.avatar} name={owner.name} />
                <UserName name={owner.name} />
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
                {currUser && currUser.id===owner.id && 

                    <PostDropdown postId={postId}/>
                    
                } 
            </Navbar.Collapse>
        </Navbar>
    )
}