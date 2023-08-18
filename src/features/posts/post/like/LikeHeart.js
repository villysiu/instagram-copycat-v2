import LikeButton from "./LikeButton"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
const LikeHeart = ({likes, commentId, postId, smHeart}) => {
    const currUser = useSelector(state=> state.users.currUser.currUser)

    return (
        currUser ? 
            <LikeButton likes={likes} currUserId={currUser.id} commentId={commentId} postId={postId} smHeart={smHeart} /> 
            : 
            <Heart className={smHeart ? "hollow smheart" : "hollow heart"}  /> 
      
    )
}
export default LikeHeart