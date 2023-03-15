import LikeButton from "./LikeButton"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { currentUserId } from "../../../user/userSlice"
const LikeHeart = ({postId}) => {
    const currUserId=useSelector(currentUserId)
    return (
        <>
        { currUserId?  
            <LikeButton postId={postId} /> 
            : 
            <Heart /> 
        }
        </>       
    )
}
export default LikeHeart