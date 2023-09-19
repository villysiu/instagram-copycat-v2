import UserHover from "../../../user/user/UserHover"
import Avatar from "../../../user/profile/Avatar"

import { useDispatch, useSelector } from "react-redux"

import FollowButton from "../../../user/followers/FollowButton"
import UnfollowButton from "../../../user/followers/UnfollowButton"
const LikeList = ({likes}) => {

    const currUser=useSelector(state=>state.users.currUser.currUser)
    
    const ButtonHelper=({like })=>{
        
        if(!currUser ) return null
        if(currUser.id === like.id) {    
            return null
        }
        if(currUser.followings.some(f=>f.id === like.id)){
            return <UnfollowButton userId={like.id} />
        }else{
            return <FollowButton userId={like.id}/>
        }
    }
    return(
        
        <div style={{padding: '1rem'}}>
        {
            likes.map(like=>{
                return (
                    <div key={like.id} className="flex_row_stretch mt-2 mb-3">
                        <div className="flex_row_center">
                            <div className="me-2" >
                                <UserHover author={like} children={
                                    <div style={{width: '45px', height: '45px'}}>
                                        <Avatar avatar={like.avatar} name={like.name} />
                                    </div>
                                } />
                            </div>
                            <div className="me-2">
                                <UserHover author={like} children={
                                    <span className="bold_font">{like.name}</span>
                                } />   
                            </div>
                            
                        </div>
                        <div>
                            <ButtonHelper like={like}  />
                        </div>
                    </div>
                )

            })
        }   
        </div>
    )
}
export default LikeList