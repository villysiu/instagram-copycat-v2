import { useState, useEffect } from "react"
import { Image } from "react-bootstrap"
import { backendAPI } from "../../../../app/helper"
import { calculateTime } from "../../../../app/helper"
import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import UsernameLink from "../../../user/user/UsernameLink"
import UserAvatarLink from "../../../user/user/UserAvatarLink"
const Comment = ({comment, postId, descId}) => {
    // const dayCreated = calculateTime(Math.round(Date.now()/1000)-comment.created_at)
    const [dayCreated, setDayCreated] = useState("???")
    
    useEffect(() => {
        var timer = setInterval(()=>
            setDayCreated(calculateTime(Math.round(Date.now()/1000)-comment.created_at))
            , 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });
    return (
        <>
            <div className="post_avatar_wrapper comment_avatar_wrapper">
                {/* <Image className="avatar"  src={`${backendAPI}/${comment.user.avatar}`} />  */}
                <UserAvatarLink author={comment.user} />
            </div>

            <div className="comment_comment_wrapper">
                <div>
                    {/* <span className="me-2"> */}
                        <UsernameLink author={comment.user} />
                    {/* </span> */}
                    <span className="ms-2">{comment.comment}</span>
                </div>
                <div style={{display: 'flex'}}>
                    <div className="light_gray_font">
                        {dayCreated}
                    </div>
                    {comment.id !== descId &&
                        <div className="ms-2 light_gray_font bold_font" >
                            <LikeCount likes={comment.likes} />
                        </div>
                    }
                </div>
            </div>
            {/* desc, postId, smHeart */}
            {comment.id !== descId &&
                <div className="ms-4 mt-1" style={{ flex: "0 0 auto" }}>
                    <LikeHeart desc={comment} postId={postId} smHeart={true}/>
                </div>  
            }
        </>
    )
}
export default Comment