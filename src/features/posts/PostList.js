import Post from './post/Post'
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice'
import AlertMsg from '../error/AlertMsg';
const PostList = () => {
    // console.log("in PostList")
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(state => state.posts.status)

    if(posts.length===0){
        if(postsStatus === 'loading' || postsStatus === 'idle'){
            return <div>Loading</div>
        }
        else if(postsStatus === 'succeeded' ){
            return <AlertMsg msg="No post yet. Login or Signup to add the first post." />
            // <Alert variant="danger">No post yet. Login or Signup to add the first post. </Alert>
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