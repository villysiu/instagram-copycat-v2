import LikeButton from "./LikeButton"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import User from "../../../user/session/User"

const LikeHeart = ({desc, postId, smHeart}) => {
    const currUser = useSelector(state=> state.users.currUser.currUser)
    
    if(currUser)
        return <LikeButton likes={desc.likes} currUserId={currUser.id} commentId={desc.id} postId={postId} smHeart={smHeart} /> 

    
    return (
        <>
                <User display={
                    <Heart className={smHeart ? "hollow smheart" : "hollow heart"}  />
                }/> 
        </>
    )
}
export default LikeHeart