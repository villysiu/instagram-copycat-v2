import { Link } from 'react-router-dom';
import PostDropdown from './PostDropdown';
import UserName from '../../user/UserName';
import Avatar from '../../user/Avatar';
import PostTime from './PostTIme';

export const PostHeader=({ownerId, postId, handleClick, postTime})=>{
    // console.log("in PostHeader")
    
    const PostHeaderDetails = () =>{
        return(
            <div style={{display: "flex", alignItems: "center"}}>
                <Avatar userId={ownerId} initialStyle={"initialStyle"} circleSize={"thumbsize"}  />
                <UserName userId={ownerId}  nameSize={"13.6px"} />
            </div>
        )
    }
    return (

    
        <div className='p-2 post_header'>
            <div style={{display: "flex", alignItems: "center"}}>
                {handleClick ? 
                    <div className="post_header_user_link" onClick={()=>handleClick()} >
                        <PostHeaderDetails />
                    </div>

                :
                    <Link to={`../users/${ownerId}`} className="post_header_user_link">
                        <PostHeaderDetails />
                    </Link>
                }
                <PostTime postTime={postTime} />
            </div>
            <PostDropdown postId={postId} ownerId={ownerId}/>
            
        </div>
    )
          
}