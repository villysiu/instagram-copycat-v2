import { useEffect } from "react";
import { fetchCurrentUserId } from "./user/userSlice";

import { fetchUsers } from "./user/userSlice";
import { fetchPosts } from "./posts/postsSlice";
import { useDispatch, useSelector } from 'react-redux';
const Test = () => {
    console.log("grabbing")
    const dispatch = useDispatch()
    // const postsStatus = useSelector(state => state.posts.status)
    // const userStatus = useSelector(state => state.user.status)
    // const usersStatus = useSelector(state => state.user.usersStatus)
    useEffect(() => {
        console.log("grabbing user/users")
        // if (postsStatus === 'idle' || userStatus === 'idle' || usersStatus === 'idle') {
         dispatch(fetchCurrentUserId())
         dispatch(fetchUsers())
        //  dispatch(fetchPosts()) 
    // }
       }, [dispatch])
    
    return (
       <></>
    )
  
}
export default Test