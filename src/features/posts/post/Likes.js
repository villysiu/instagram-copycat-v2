import { Card, OverlayTrigger, Tooltip } from "react-bootstrap"
import Like from "./Like"
import { Heart } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { currentUser } from "../../user/userSlice"
const Likes = ({likes, postId}) => {
    const currUser=useSelector(currentUser)
    return (
        <Card.Text className="mb-3">
            <OverlayTrigger placement="top" overlay={ 
                <Tooltip> 
                    { 
                        likes.length===0 ? 
                            <div>No like yet.</div> 
                            :
                            likes.map(like=><div key={like.user.id}>{like.user.name}</div>)
                    }
                </Tooltip> }>
                <span>
                    { currUser?  <Like currUserId={currUser.id} likes={likes} postId={postId} /> : <Heart /> }
                    {likes.length} likes
                </span>
            </OverlayTrigger>
        </Card.Text>  
    )
}
export default Likes