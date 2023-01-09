import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { likeAPost, unlikeAPost } from './postsSlice'
const Like = ({user, liked_users, post_id}) => {
    const dispatch=useDispatch()
    const likeObj=liked_users.find(u=> u.liked_user_id===user.id )
    const [redHeart, toggleHeart]=useState(likeObj===undefined? false : true)
    
    const handleLike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(likeAPost(post_id))
    }
    const handleUnlike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(unlikeAPost({post_id: post_id, liked_id: likeObj.liked_id}))
    }
    
    return (
        redHeart ? 
        <HeartFill className="redheart" onClick={handleUnlike} /> :
        <Heart className="heart" onClick={handleLike} />
    )
}
export default Like