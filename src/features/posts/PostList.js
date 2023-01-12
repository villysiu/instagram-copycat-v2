// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { selectAllPosts } from './postsSlice'

import { currentUser } from '../user/userSlice'

const PostList = ({setUserPostsCB}) => {
    // const dispatch = useDispatch()
    const user=useSelector(currentUser) 
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)


   
    if (postStatus === 'loading') {
        return <div>loading</div>
}
if (postStatus === 'failed'){
    return <div>{error}</div>
}

   
    if(posts.length===0){
        return (
            <p>"No post yet. Add the first one here." </p>
        )
    }
    return (
        <>
            {/* {show &&  <AlertBar error={error} />} */}
            
            <div>
                {posts.map(p=>{
                    return <Post key={p.photo_id} post={p} user={user} setUserPostsCB={setUserPostsCB} />
                    
                })}
            
            </div>
        </>
    )
}
export default PostList