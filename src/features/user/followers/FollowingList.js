import UserHover from "../user/UserHover"
import Avatar from "../profile/Avatar"
import { useSelector } from "react-redux"
import FollowButton from "./FollowButton"
import UnfollowButton from "./UnfollowButton"

const FollowingList = ({followings, userId, setShow}) => {
    console.log(followings)

    const currUser=useSelector(state=>state.users.currUser.currUser)
   


    const ButtonHelper=({following, userId})=>{
        
        if(!currUser) return null
        if(currUser.id === following.id) {    
            return null
        }
        if(currUser.id === userId){
             return <div className="follow_btn_wrapper"><UnfollowButton userId={following.id} /></div>
        }
        
        // (currUser.id !== user.id  
        if(currUser.followings.some(f=>f.id === following.id)){
            return <div className="follow_btn_wrapper"><UnfollowButton userId={following.id} /></div>
        }else{
            return <div className="follow_btn_wrapper"><FollowButton userId={following.id}/></div>
        }
        
    }
    return(
        
        <div style={{padding: '1rem'}}>
        {
                followings.map(following=>{
                    return (
                        <div key={following.id} className="flex_row_stretch mt-2 mb-3">
                            <div className="flex_row_center">
                                <div className="me-2" onClick={()=>setShow(false)}>
                                    <UserHover author={following} children={
                                        <div style={{width: '45px', height: '45px'}}>
                                            <Avatar avatar={following.avatar} name={following.name} />
                                        </div>
                                    } />
                                </div>
                                <div onClick={()=>setShow(false)}>
                                    <UserHover author={following} children={
                                        <span className="wrap_text_anywhere"><b>{following.name}</b></span>
                                    } />   
                                </div>
                            </div>
                            <div>
                                <ButtonHelper following={following} userId={userId}  />
                            </div>
                        </div>
                    )
    
                })
            }   
            </div>
        )
}
export default FollowingList