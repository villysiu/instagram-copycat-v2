import { useState, useEffect } from "react"
import { Image } from "react-bootstrap"
import { backendAPI } from "../../../../app/helper"
import { calculateTime } from "../../../../app/helper"
import LikeHeart from "../like/LikeHeart"
import LikeCount from "../like/LikeCount"
import UsernameLink from "../../../user/user/UsernameLink"
import UserAvatarLink from "../../../user/user/UserAvatarLink"
import { memo } from "react"
const Comment = ({comment, postId, descId}) => {
    // const dayCreated = calculateTime(Math.round(Date.now()/1000)-comment.created_at)
    const [dayCreated, setDayCreated] = useState("???")
    console.log("comment "+ comment.id)
    useEffect(() => {
        var timer = setInterval(()=>
            setDayCreated(calculateTime(Math.round(Date.now()/1000)-comment.created_at))
            , 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });
    return (
        <div className="flex_space_between">
            <div className="flex_row">
                <div className="post_avatar_wrapper mt-2 me-3">
                    <UserAvatarLink author={comment.user} />
                </div>

                <div>
                    <div>
                        <UsernameLink author={comment.user} />
                        <span className="ms-2">{comment.comment}</span>
                    </div>
                    <div className="flex_row_center">
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
            </div>
            {/* desc, postId, smHeart */}
            {comment.id !== descId &&
                <div className="ms-3 mt-1">
                    <LikeHeart desc={comment} postId={postId} smHeart={true}/>
                </div>  
            }
        </div>
    )
}
const areEqual = (prevProps, nextProps) => {
   
    if (prevProps.comment.likes !== nextProps.comment.likes) {
      return false                                    // will re-render
    }
    return true                                  // donot re-render   
  }
export default memo(Comment, areEqual)