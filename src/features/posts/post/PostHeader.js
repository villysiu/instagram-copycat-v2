import PostTime from "./PostTime"
import PostDropdown from "./PostDropdown"
import UsernameLink from "../../user/user/UsernameLink"
import UserAvatarLink from "../../user/user/UserAvatarLink"
const PostHeader = ({post}) =>{
    return (
        <div className='flex_space_between m-2'>
            <div className="flex_row_center">
                <UserAvatarLink author={post.owner} />
                <UsernameLink author={post.owner} />
                <PostTime postTime={post.created_at} />
            </div>
            <PostDropdown post={post} />
        </div>
    )
}
export default PostHeader