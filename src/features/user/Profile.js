import UserPostList from "../posts/UserPostList"
import { useSelector } from "react-redux"
import { selectUserbyId } from '../user/userSlice'
import { useParams } from "react-router-dom"

import ProfileHeader from "./ProfileHeader"

const Profile = () => {
    console.log("in profile")
    const { userId } = useParams();
    console.log(userId)
    const data=useSelector(state=>selectUserbyId(state, Number(userId)))
    console.log(data)
   
    return (
        <div className="list-900" >
            <ProfileHeader user_id={Number(userId)} />
            <UserPostList userId={Number(userId)} />
        </div>  

    )
    
}
export default Profile