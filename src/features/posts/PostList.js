import Post from './post/Post'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import resetPosts from './postsSlice'
import { fetchPosts } from './postsSlice';
import { getPostCount } from './postsSlice';
// import AlertMsg from '../error/AlertMsg';
import { Spinner } from 'react-bootstrap';
const PostList = () => {
    // console.log("in PostList")

    const dispatch = useDispatch()
    const {status, posts} = useSelector(state => state.posts.posts)
    const count = useSelector(state => state.posts.count.count)

    useEffect(()=>{
        if(status === 'idle' || posts.length<5 )
            dispatch(fetchPosts(posts.length)) 
            dispatch(getPostCount())
        },[]
    )
    console.log(posts)

    const handleClick = e =>{
        dispatch(fetchPosts(posts.length))
    }
    // if(posts.length===0){
    //     console.log(status)
        if(status === 'loading' || status === 'idle'){
            return <div><Spinner /></div>
        }
        if(status === 'succeeded' && posts.length===0 ){
            return <div>No post yet</div>
        }
    // }

    return (
        <>
            {posts.map( post =>
                <Post key={post.id} post={post}  />
            )}
            {posts.length === count ? 
                <div className="see_more_post mt-2"> End of posts</div>
                :
                <div className="see_more_post mt-2" onClick={handleClick}>See more posts</div>
            }
            
        </>
    )

       
}
export default PostList