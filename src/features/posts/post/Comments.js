import { Card } from "react-bootstrap"
import { useMemo } from "react"
import UserName from "../../user/UserName"
const Comments = ({comments}) => {

    console.log("in comments")
    // return useMemo(()=>{
    return (
        <div className="mb-1 scrollable-box" >
        {comments.map((comment)=>{
            return (
            <div key={comment.id} style={{textAlign: "left", fontSize: "13.6px"}}>
                <UserName user_id={comment.user_id} />
                &nbsp;
                {comment.comment}
            </div>)
        })}
        </div>
    )
    // },[comments.length])
}
export default Comments