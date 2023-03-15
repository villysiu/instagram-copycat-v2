import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { likeAPost, unlikeAPost } from '../../postsSlice'
import { useSelector } from 'react-redux'
import { likedByUserId } from '../../postsSlice'
const LikeButton = ({postId}) => {
    // console.log("in likebutton")
    const dispatch=useDispatch()
    const res=useSelector(state=>likedByUserId(state, postId))
    
    const [redHeart, toggleHeart]=useState(res)
    
    const handleLike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(likeAPost(postId))
    }
    const handleUnlike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(unlikeAPost({post_id: postId}))
    }
   
    return (
        redHeart ? 
            <HeartFill className="redheart" onClick={handleUnlike} /> 
            :
            <Heart className="heart" onClick={handleLike} />
    )
    
}
export default LikeButton