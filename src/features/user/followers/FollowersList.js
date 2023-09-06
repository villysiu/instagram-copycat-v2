import UserHover from "../user/UserHover"
import Avatar from "../profile/Avatar"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { removeFollower } from "../usersSlice"
import FollowButton from "./FollowButton"
import UnfollowButton from "./UnfollowButton"
const FollowersList = ({followers, userId}) => {
    console.log(followers)
    const dispatch=useDispatch()
    const currUser=useSelector(state=>{
        console.log(state)
        return state.users.currUser.currUser
    
    })
    
    
    const ButtonHelper=({follower, userId})=>{
        
        const handleClick = () =>{
            // console.log("remove User "+follower.id + " from User "+ currUser.id)
            dispatch(removeFollower({user_id: follower.id }))
        }

        if(!currUser ) return null
        if(currUser.id === follower.id) {    
            return null
        }
        if(currUser.id === userId){
             return <Button className='remove_follower_btn' onClick={handleClick}>Remove</Button>
        }
        
        // (currUser.id !== user.id  
        if(currUser.followings.some(f=>f.id === follower.id)){
            return <UnfollowButton userId={follower.id} />
        }else{
            return <FollowButton userId={follower.id}/>
        }
        
    }
    return(
        
        <div style={{padding: '1rem'}}>
    {
            followers.map(follower=>{
                return (
                    <div key={follower.id} className="flex_row_stretch mt-2 mb-3">
                        <div className="flex_row_center">
                            <div className="me-2" 
                            // onClick={()=>setShow(false)}
                            >
                                <UserHover author={follower} children={
                                    <div style={{width: '45px', height: '45px'}}>
                                        <Avatar avatar={follower.avatar} name={follower.name} />
                                    </div>
                                } />
                            </div>
                            <div 
                            // onClick={()=>setShow(false)} 
                            className="me-2">
                                <UserHover author={follower} children={
                                    <span className="bold_font">{follower.name}</span>
                                } />   
                            </div>
                            
                        </div>
                        <div>
                            <ButtonHelper follower={follower} userId={userId}  />
                        </div>
                    </div>
                )

            })
        }   
        </div>
    )
}
export default FollowersList