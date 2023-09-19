import ProfileHeader from "./ProfileHeader"
import UserPostList from "../../posts/UserPostList"
import { useParams, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { fetchUserById } from "../usersSlice"
import { Spinner } from "react-bootstrap"
import { useEffect } from "react"

const Profile = () => {
    console.log("in profile")
    
    const { id } = useParams();
    const userId = Number(id)

    const dispatch=useDispatch();
    const user=useSelector(state=>state.users.user.user)
    const userStatus = useSelector(state=>state.users.user.status)

   const userPostsCount = useSelector(state => state.posts.userPosts.posts.length)

    useEffect(()=>{
        console.log("heheh")
        if(!user || (user && user.id !== userId)){
            dispatch(fetchUserById(userId)) 
        }
    },[userId])
    
    console.log(user)
    console.log(userStatus)
    if(!user){
        if(userStatus==="loading" || userStatus==='idle')
            return <Spinner />

        if(userStatus==="failed")
            return <Navigate to="/" replace={true} />
        
    }
    if(user && user.id !== userId){ //Has user but not same id
        return <Spinner />
    }


    return (
        <div className="profile_wrapper">
            <ProfileHeader user={user} userPostsCount={userPostsCount} />
            <UserPostList idToFetch={userId} />
        </div>  

    )
    
}

export default Profile