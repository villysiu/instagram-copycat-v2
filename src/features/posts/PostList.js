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


   
    if(posts.length===0){
        return (
            <p>"No post yet. Add the first one here." </p>
        )
    }
    return (
        <div className="list-600">
            {/* { postStatus === 'failed' && <div>{error}</div> } */}
            {posts.map((post)=>{
                
                return (
                    <div key={post.id}  className='mb-3'>
                        <Post  key={post.id} post={post} handleClick={()=>showProfileCB(post.owner_id)} />
                    </div>
                )
            })}
            
     
        </div>
    )
}
export default PostList