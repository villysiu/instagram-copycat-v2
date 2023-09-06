import UsernameLink from "../../../user/user/UsernameLink"
import UserAvatarLink from "../../../user/user/UserAvatarLink"
const PostPopupHeader = ({author}) =>{
    return(
        <div className="flex_row_center m-2">
            <UserAvatarLink author={author} />
            <UsernameLink author={author} />
        </div>
    )
}
export default PostPopupHeader