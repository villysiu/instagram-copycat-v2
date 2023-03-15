
import UserName from "../../user/UserName"
const Comments = ({comments}) => {

    // console.log("in comments")
   
    return (
        <div className="mb-1 scrollable-box" >
        {comments.map((comment)=>{
            return (
                <div key={comment.id} style={{textAlign: "left", fontSize: "13.6px"}}>
                    <UserName userId={comment.user_id} />
                    &nbsp;
                    {comment.comment}
                </div>
            )
        })}
        </div>
    )
   
}
export default Comments