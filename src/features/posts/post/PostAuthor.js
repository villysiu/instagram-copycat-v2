import { Link } from "react-router-dom"
import Avatar from "../../user/profile/Avatar"
const PostAuthor = ({author}) =>{

    return(
        <>
            <Link className="link_black_no_effect" to={`/users/${author.id}`}>
                <div className="post_avatar_wrapper me-1">
                    <Avatar avatar={author.avatar} name={author.name} />
                </div>
            </Link>
            
            <Link className="link_black" to={`/users/${author.id}`}>
                <div className="bold_font mx-1">{author.name}</div>
            </Link>
        </>
    )
}
export default PostAuthor