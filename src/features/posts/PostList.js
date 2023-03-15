import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Post from './post/Post'
import { fetchPosts } from './postsSlice';
import { selectAllPosts } from './postsSlice'

const PostList = () => {
    console.log("in PostList")
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(state => state.posts.status)
console.log(postsStatus)
    if(posts.length===0){
        if(postsStatus === 'loading' || postsStatus === 'idle'){
            return <div>Loading</div>
        }
        else if(postsStatus === 'succeeded' ){
            return <div>"No post yet. Add the first one here." </div>
        }
    }
    else {
    return (
        <div className="list-600">
            {posts.map( post =>
              <Post key={post.id} post={post}  />
            )}
        </div>
    )

       }
}
export default PostList