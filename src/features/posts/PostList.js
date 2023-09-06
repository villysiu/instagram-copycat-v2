import Post from './post/Post'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice'
// import AlertMsg from '../error/AlertMsg';
const PostList = () => {
    // console.log("in PostList")
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(state => state.posts.status)
console.log(posts)
    if(posts.length===0){
        if(postsStatus === 'loading' || postsStatus === 'idle'){
            return <div>Loading</div>
        }
        else if(postsStatus === 'succeeded' ){
            return <div>No post yet</div>
        }
    }
    else {
    return (
        <>
            {posts.map( post =>
              <Post key={post.id} post={post}  />
            )}
        </>
    )

       }
}
export default PostList