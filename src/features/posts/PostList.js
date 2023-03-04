import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Post from './post/Post'
import { fetchPosts } from './postsSlice';
import { selectAllPosts } from './postsSlice'

const PostList = () => {
    console.log("in PostList")
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(state => state.posts.status)
    
    if(postsStatus === 'loading' ||  postsStatus === 'idle'){
        return (
            <div><h1>Loading</h1></div>
        )
    }
    if(posts.length===0){
        return (
            <div>"No post yet. Add the first one here." </div>
        )
    }
    
    return (
        <div className="list-600">
            {/* { postStatus === 'failed' && <div>{error}</div> } */}
            {posts.map((post)=>{
                
                return (
                    
                    <Post key={post.id} post={post}  />
                   
                )
            })}
            
     
        </div>
    )
// },[posts, postsStatus])
       
}
export default PostList