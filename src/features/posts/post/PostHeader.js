import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostDropdown from './PostDropdown';
import UserName from '../../user/UserName';
import Avatar from '../../user/Avatar';
// import { useMemo } from 'react';

export const PostHeader=({owner_id, postId, handleClick})=>{
    console.log("in PostHeader")
    // const currUser=useSelector(currentUser)
    
    return (
        <Navbar>
            {handleClick ? 
                <div className="p-2 linkBtn linkBtnR" onClick={()=>handleClick()} >
                    <Avatar user_id={owner_id} />
                    <UserName user_id={owner_id} />
                </div>

            :
                
                <Link to={`users/${owner_id}`} className="p-2 linkBtn linkBtnR">
                    <Avatar user_id={owner_id} />
                    <UserName user_id={owner_id} />
                </Link>
            }
            <Navbar.Collapse className="justify-content-end">
                <PostDropdown postId={postId} ownerId={owner_id}/>
            </Navbar.Collapse>
        </Navbar>
    )
          
}