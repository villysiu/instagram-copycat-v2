import UserHover from "./UserHover"
import Avatar from "../profile/Avatar"

export  const UserAuthor = ({author}) =>{
    const avatar = (
        <div className="post_avatar_wrapper me-1">
            <Avatar avatar={author.avatar} name={author.name} />
        </div>
    )
    const username = (
        <div className="bold_font mx-1">{author.name}</div>
    )
    return(
        
        <>
            <UserHover author={author} children={avatar} />
            <UserHover author={author} children={username} />   
        </>
            
    )
}
export default UserAuthor