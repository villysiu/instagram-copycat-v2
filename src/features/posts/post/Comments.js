import { Card } from "react-bootstrap"
const Comments = ({comments}) => {

    console.log(comments)
    return (
        <>

        {comments.map((comment)=>{
            return (
            <Card.Text key={comment.id} style={{marginBottom: "0px"}}>
                <b>{comment.user}</b> {comment.comment}
            </Card.Text>)
        })}
        </>
    )
}
export default Comments