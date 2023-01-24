import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { likeAPost, unlikeAPost } from '../postsSlice'
const Like = ({currUser, likes, postId}) => {
    const dispatch=useDispatch()
    const likeObj=likes.find(like=> like.user.id===currUser.id )

    const [redHeart, toggleHeart]=useState(likeObj===undefined? false : true)
    
    const handleLike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(likeAPost(postId))
    }
    const handleUnlike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(unlikeAPost({post_id: postId, liked_id: likeObj.id}))
    }
    
    return (
        redHeart ? 
        <HeartFill className="redheart" onClick={handleUnlike} /> :
        <Heart className="heart" onClick={handleLike} />
    )
}
export default Like