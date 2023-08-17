import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { likeAPost, unlikeAPost } from '../../postsSlice'

const LikeButton = ({likes, currUserId, commentId, postId, smHeart}) => {
    const dispatch=useDispatch()
    
    const currUserLike = likes.some(like=>like.user_id === currUserId)

    const handleLike=()=> dispatch(likeAPost({comment_id: commentId, post_id: postId}))
    
    const handleUnlike=()=> dispatch(unlikeAPost({comment_id: commentId, post_id: postId}))
    
   
    return (
        currUserLike ? 
            <HeartFill className={smHeart ? "filled smheart" : "filled heart"}
                onClick={handleUnlike} 
            /> 
            :
            <Heart className={smHeart ? "hollow smheart" : "hollow heart" }
                onClick={handleLike} 
            />
    )
    
}
export default LikeButton