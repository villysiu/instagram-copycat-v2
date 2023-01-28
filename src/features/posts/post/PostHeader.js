import { Navbar, Image } from 'react-bootstrap';
import PostDropdown from './PostDropdown';
import { useSelector } from 'react-redux';
import { currentUser } from '../../user/userSlice';

export const PostHeader=({owner, postId, handleClick})=>{
    const currUser=useSelector(currentUser)
    return (
        <Navbar>
            {/* <Image className="round_avator thumbsize" src={`http://localhost:3000/${owner.avator}`}></Image> */}
            <Navbar.Brand className="transparent_button" as="button" onClick={handleClick}>
                {owner.avator && <Image className="round_avator thumbsize" src={`http://localhost:3000/${owner.avator}`} /> }
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