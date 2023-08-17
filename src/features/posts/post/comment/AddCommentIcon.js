import { useState } from "react"
import PostModal from "../postPopup/PostPopup"
import { Modal } from "react-bootstrap"
import { ChatDots } from "react-bootstrap-icons"
const AddCommentIcon = ({post}) => {
    const [show, setShow] = useState(false)
    

    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="post_modal" centered>
                <PostModal post={post} setShow={setShow} />
            </Modal>
            <div onClick={()=>setShow(true)}>
                <ChatDots className="comment_icon" />
            </div>
        </>
    
       
    )
   
}
export default AddCommentIcon