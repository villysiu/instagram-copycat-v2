import ProfileHeader from "./ProfileHeader"
import UserPostList from "../posts/UserPostList"
import { useParams, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectUserbyId } from "./usersSlice"
import { Spinner } from "react-bootstrap"

const Profile = () => {
    console.log("in profile")
    const { userId } = useParams();
  
    const user=useSelector(state=>selectUserbyId(state, Number(userId)))
    const usersStatus = useSelector(state=>state.users.status)

    if(!user){
        if(usersStatus==="loading" || usersStatus==="idle")
            return <Spinner />
    
        else if(usersStatus==="succeeded"){
            return <Navigate to="/instagram-copycat-v2" replace={true} />
        }
    }  
    return (
        <div className="list-900" >
            <ProfileHeader user={user} />
            <UserPostList userId={Number(userId)}  />
        </div>  

    )
    
}
export default Profile