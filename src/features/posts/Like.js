import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { likeAPost, unlikeAPost } from './postsSlice'
const Like = ({user, liked_users, photo_id}) => {
    
    
    const temp=liked_users.find(u=> u.liked_user_id===user.id )
    const [redHeart, toggleHeart]=useState(temp===undefined? false : true)
    const dispatch=useDispatch()

    const handleLike=()=>{
        toggleHeart(prev=>!prev)
        dispatch(likeAPost(photo_id))
    }
    const handleUnlike=()=>{
        toggleHeart(prev=>!prev)
        
        dispatch(unlikeAPost({post_id: photo_id, liked_id: temp.liked_id}))
    }
    

    
    return (
        redHeart ? 
        <HeartFill onClick={handleUnlike} /> :
        <Heart onClick={handleLike} />
    )
}
export default Like