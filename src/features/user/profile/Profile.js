import ProfileHeader from "./ProfileHeader"
import UserPostList from "../../posts/UserPostList"
import { useParams, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { fetchUserById } from "../usersSlice"
import { Spinner } from "react-bootstrap"
import { useEffect } from "react"
import { selectPostsbyUserId } from "../../posts/postsSlice"
const Profile = () => {
    // console.log("in profile")
    
    const { id } = useParams();
    const userId = Number(id)

    const dispatch=useDispatch();
    const user=useSelector(state=>state.users.user.user)
    const userStatus = useSelector(state=>state.users.user.status)

    const postsStatus = useSelector(state => state.posts.status)
    const userPosts=useSelector(state=>selectPostsbyUserId(state, userId))

    useEffect(()=>{
        dispatch(fetchUserById(userId)) 
    },[userId, dispatch])

    if(!user){
        if(userStatus==="loading" || userStatus==="idle")
            return <Spinner />

        else {//usersStatus===failed
            return <Navigate to="/" replace={true} />
        }
    }  
    return (
        <div className="profile_wrapper">
            <ProfileHeader user={user} userPostsCount={userPosts.length} />
            <UserPostList userPosts={userPosts} postsStatus={postsStatus} />
        </div>  

    )
    
}
export default Profile