import Post from './post/Post'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectAllPosts } from './postsSlice';
import { fetchPosts } from './postsSlice';
import { getPostCount } from './postsSlice';
// import AlertMsg from '../error/AlertMsg';

const PostList = () => {
    // console.log("in PostList")

    const dispatch = useDispatch()
    const postsStatus = useSelector(state => state.posts.posts.status)
    const posts = useSelector(state => state.posts.posts.posts)
    const postsCount = useSelector(state =>{
console.log(state)
    return state.posts.posts.count
})

    useEffect(()=>{
        
        if(postsStatus === 'idle')
            dispatch(fetchPosts(0)) 
            dispatch(getPostCount())
        },[]
    )

    
console.log(posts)
// console.log(postsCount)
    const handleClick = e =>{
        dispatch(fetchPosts(posts.length))
    }
    if(posts.length===0){
        if(postsStatus === 'loading' || postsStatus === 'idle'){
            return <div>Loading</div>
        }
        else if(postsStatus === 'succeeded' ){
            return <div>No post yet</div>
        }
    }

    return (
        <>
            {posts.map( post =>
              <Post key={post.id} post={post}  />
            )}
            {posts.length === postsCount ? 
                <div className="see_more_post mt-2"> End of posts</div>
                :
                <div className="see_more_post mt-2" onClick={handleClick}>See more posts</div>
            }
            
        </>
    )

       
}
export default PostList