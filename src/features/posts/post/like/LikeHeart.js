import LikeButton from "./LikeButton"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
const LikeHeart = ({likes, commentId, postId, smHeart}) => {
    const currUserId = useSelector(state=> state.users.currUser.id)

    return (
        currUserId ? 
            <LikeButton likes={likes} currUserId={currUserId} commentId={commentId} postId={postId} smHeart={smHeart} /> 
            : 
            <Heart className={smHeart ? "hollow smheart" : "hollow heart"}  /> 
      
    )
}
export default LikeHeart