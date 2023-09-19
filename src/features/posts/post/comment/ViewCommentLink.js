const ViewCommentLink = ({count, setShow}) =>{
    if(count === 0)
        return null
    return (
       
        <div className="comment_wrapper hide_link" onClick={()=>setShow(true)}>
            view all {count} comments
        </div>
    )
}
export default ViewCommentLink