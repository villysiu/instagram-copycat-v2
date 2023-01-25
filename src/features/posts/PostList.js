// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Post from './post/Post'
import { selectAllPosts } from './postsSlice'

const PostList = ({showProfileCB}) => {
    
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)
    console.log(posts)
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
        <div className="list-600">
            {posts.map((post)=>{
                
                return (
                    
                    <Post key={post.id} post={post} showProfileCB={showProfileCB} />
                    
                )
            })}
            
     
        </div>
    )
}
export default PostList