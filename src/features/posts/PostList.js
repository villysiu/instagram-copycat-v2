import Post from './post/Post'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './postsSlice';
import { getPostCount } from './postsSlice';
import { Spinner } from 'react-bootstrap';

const PostList = () => {

    const dispatch = useDispatch()
    const {status, posts} = useSelector(state => state.posts.posts)
    const count = useSelector(state => state.posts.count.count)

    useEffect(()=>{
        if(status === 'idle' || (posts.length<5 && status !=='loading') )
            dispatch(fetchPosts(posts.length)) 
            dispatch(getPostCount())
        },[]
    )

    const handleClick = e =>{
        dispatch(fetchPosts(posts.length))
    }
    if(posts.length===0){
        if(status === 'loading' || status === 'idle'){
            return <div className="spinner"><Spinner /></div>
        }
        if(status === 'succeeded'){
            return <div>No post yet</div>
        }
    }

    return (
        <>
            {posts.map( post =>
                <Post key={post.id} post={post}  />
            )}
            {
                status === 'loading' ?
                <div className="spinner mt-2"><Spinner /></div> :
                <>
                    {posts.length === count ? 
                        <div className="see_more_post mt-2"> End of posts</div>
                        :
                        <div className="see_more_post mt-2" onClick={handleClick}>See more posts</div>
            }
                </>
            }
        </>
    )
}
export default PostList
