import LikeHeart from "./LikeHeart"
import LikeList from "./LikeList"
import { useMemo } from "react"
const LikeFeature = ({likes, postId}) => {
    // console.log("in Likes")

    return (
        <div style={{textAlign: "left"}} className="mb-1">
            
            <LikeHeart postId={postId}/>
            <LikeList likes={likes} />
            
        </div>  
    )
                
}
export default LikeFeature