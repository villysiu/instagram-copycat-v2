import UserHover from "../user/UserHover"
import Avatar from "../profile/Avatar"
import { Button } from "react-bootstrap"
const FollowingList = ({users, setShow}) => {
    console.log(users)
    
    return(
        
        <div style={{padding: '1rem'}}>
        {
                users.map(user=>{
                    return (
                        <div key={user.id} className="flex_row_stretch mt-2 mb-3">
                            <div className="flex_row_center">
                                <div className="me-2" onClick={()=>setShow(false)}>
                                    <UserHover author={user} children={
                                        <div style={{width: '45px', height: '45px'}}>
                                            <Avatar avatar={user.avatar} name={user.name} />
                                        </div>
                                    } />
                                </div>
                                <div onClick={()=>setShow(false)}>
                                    <UserHover author={user} children={
                                        <span className="bold_font">{user.name}</span>
                                    } />   
                                </div>
                            </div>
                            <div>
                                <Button className="remove_follower_btn">Unfollow</Button>
                            </div>
                        </div>
                    )
    
                })
            }   
            </div>
        )
}
export default FollowingList