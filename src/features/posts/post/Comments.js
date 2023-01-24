const Comments = ({comments}) => {
    return (
        comments.map((comment)=>{
            <li><b>{comment.owner}</b> {comment.comment} </li>
        })
    )
}
export default Comments