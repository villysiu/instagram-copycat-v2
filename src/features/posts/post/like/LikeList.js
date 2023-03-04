import { OverlayTrigger, Tooltip } from "react-bootstrap"
import UserName from "../../../user/UserName"
const LikeList = ({likes}) =>{
    return(
        <OverlayTrigger placement="top" overlay={ 
            <Tooltip> 
                { 
                    likes.length===0 ? 
                        <div>No like yet.</div> 
                        :
                        likes.map(like=><div key={like.id}>
                            <UserName user_id={like.user_id} />
                        </div>)
                }
            </Tooltip> }>
            <span className="mx-2" style={{fontSize: "13.6px"}}>
                {likes.length} likes
            </span>
        </OverlayTrigger>
    )
}
export default LikeList