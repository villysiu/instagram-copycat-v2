import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { likeAPost, unlikeAPost } from '../../postsSlice'

const LikeButton = ({likes, currUserId, commentId, postId, smHeart}) => {
    
    const dispatch=useDispatch()
    const currUserLike = likes.some(like=>like.id === currUserId)

    const handleLike=()=> dispatch(likeAPost({comment_id: commentId, post_id: postId}))
    
    const handleUnlike=()=> dispatch(unlikeAPost({currUser_id: currUserId, comment_id: commentId, post_id: postId}))
    
   
    return (
        currUserLike ? 
            <HeartFill className={smHeart ? "filled smheart hover_pointer" : "filled heart hover_pointer"}
                onClick={handleUnlike} 
            /> 
            :
            <Heart className={smHeart ? "hollow smheart hover_pointer" : "hollow heart hover_pointer" }
                onClick={handleLike} 
            />
    )
    
}
export default LikeButton