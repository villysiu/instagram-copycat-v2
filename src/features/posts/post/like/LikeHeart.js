import LikeButton from "./LikeButton"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
const LikeHeart = ({desc, postId, smHeart}) => {
    const currUser = useSelector(state=> state.users.currUser.currUser)
    // console.log(desc)
    return (
        currUser ? 
            <LikeButton likes={desc.likes} currUserId={currUser.id} commentId={desc.id} postId={postId} smHeart={smHeart} /> 
            : 
            <Heart className={smHeart ? "hollow smheart" : "hollow heart"}  /> 
      
    )
}
export default LikeHeart