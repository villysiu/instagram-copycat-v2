import { useState } from "react"
import PostModal from "../postPopup/PostPopup"
import { Modal } from "react-bootstrap"
const SeeCommentsLink = ({post}) => {
    const [show, setShow] = useState(false)
    // console.log("in comments")
    if(post.comments.length===0)
        return null
 
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="post_modal">
                <PostModal post={post} setShow={setShow} />
            </Modal>
            <div className="comment_wrapper hide_link" onClick={()=>setShow(true)}>
                view all {post.comments.length} comments
            </div>
        </>
    )
   
}
export default SeeCommentsLink