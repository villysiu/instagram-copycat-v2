import ProfileHeader from "./ProfileHeader"
import UserPostList from "../../posts/UserPostList"
import { useParams, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { fetchUserById } from "../usersSlice"
import { Spinner } from "react-bootstrap"
import { useEffect } from "react"
import { fetchPostsByUserId } from "../../posts/postsSlice"
const Profile = () => {
    // console.log("in profile")
    
    const { id } = useParams();
    const userId = Number(id)

    const dispatch=useDispatch();
    const user=useSelector(state=>state.users.user.user)
    const userStatus = useSelector(state=>state.users.user.status)

    // const postsStatus = useSelector(state => state.posts.status)
    // const userPosts = useSelector(state => state.posts.posts)

   const userPostsCount = useSelector(state => state.posts.userPosts.posts.length)

    useEffect(()=>{
        if(!user || (user && user.id !== userId))
            dispatch(fetchUserById(userId)) 
        
    },[])

    // console.log(userPosts)
    if(!user){
        if(userStatus==="loading" || userStatus==="idle")
            return <Spinner />

        // else {//usersStatus===failed
        //     return <Navigate to="/" replace={true} />
        // }
    }  


    return (
        <div>
            <ProfileHeader user={user} userPostsCount={userPostsCount} />
            <UserPostList userId={userId} />
        </div>  

    )
    
}
export default Profile