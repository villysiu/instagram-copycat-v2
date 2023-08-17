import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPostbyId } from "../postsSlice"
import Post from "./Post"
const PostFetchPage = () => {
    console.log("in PostFectc")
//     const {postId}=useParams()
//     const postsStatus = useSelector(state=>state.posts.status)
//     const post = useSelector(state=> selectPostbyId(state, Number(postId)))
// console.log(postsStatus)

//     if(!post && (postsStatus==="loading" || postsStatus==="idle"))
//         return "loading"

//     return (
//         <div><Post post={post} handleClick={null} /></div>
    // )
}
export default PostFetchPage