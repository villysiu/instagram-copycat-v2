import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Post from './Post'
import { selectAllPosts } from './postsSlice'
import { fetchPosts } from './postsSlice'
import { currentUser } from '../user/userSlice'
const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    const user=useSelector(currentUser) 
    
    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])


    if (postStatus === 'loading') 
        return <div>loading</div>
    if (postStatus === 'failed')
        return <div>{error}</div>
    
    if(posts.length===0)
        return <div>No post yet. Add the first one here..</div>
    return (
        <>
            <div>All posts</div>
            <div>
                {posts.map(photo=>{
                    return <Post key={photo.photo_id} {...photo} user={user} />
                    
                })}
            
            </div>
        </>
    )
}
export default PostList