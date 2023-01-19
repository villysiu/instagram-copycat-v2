// import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { selectAllPosts } from './postsSlice'
import { Card } from 'react-bootstrap'

const PostList = ({showUserPostsCB}) => {
    
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
        <div className="list-600">
            {/* {show &&  <AlertBar error={error} />} */}
            
            
                {posts.map(post=>{
                    // return <Post key={post.id} post={post} showUserPostsCB={showUserPostsCB} />
                    return (
                        <Card className='mb-3'>
                            <Post key={post.id} post={post} showUserPostsCB={showUserPostsCB} />
                        </Card>
                    )
                })}
            
     
        </div>
    )
}
export default PostList