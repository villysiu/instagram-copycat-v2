import UserHover from "./UserHover"
import Avatar from "../profile/Avatar"

export  const UserAvatarLink = ({author}) =>{

    return(
        <UserHover author={author} children={
            <div className="post_avatar_wrapper me-1">
                <Avatar avatar={author.avatar} name={author.name} />
            </div>
        } />
            
    )
}
export default UserAvatarLink