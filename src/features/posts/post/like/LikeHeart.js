import LikeButton from "./LikeButton"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { currentUser } from "../../../user/userSlice"
const LikeHeart = ({postId}) => {
    const currUser = useSelector(currentUser)
    console.log(currUser)
    return (
        <>
        { currUser?  
            <LikeButton postId={postId} /> 
            : 
            <Heart /> 
        }
        </>       
    )
}
export default LikeHeart