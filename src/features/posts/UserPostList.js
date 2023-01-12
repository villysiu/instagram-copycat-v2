import { useSelector } from "react-redux"
import { selectPostsbyUserId } from "./postsSlice"
const UserPostList = ({userId}) => {
    const posts=useSelector(state=>selectPostsbyUserId(state, userId))
    console.log(posts)
    return(
        <div>user post List</div>
    )
}
export default UserPostList