import LikeList from "./LikeList"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { X } from "react-bootstrap-icons"
const LikeCount = ({likes}) =>{

    // console.log(likes)

    const [show, setShow] = useState(false)
   
    if(likes.length===0){
        return (
            <>
                <b>0</b> like
            </>
        )
    }
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="followers_modal" centered >
                <X className="followers_modal_close_btn hover_pointer" onClick={()=>setShow(false)} />
                <div className="followers_modal_title border-bottom">Likes</div>
                <LikeList likes={likes} /> 
            </Modal>
            <span className="like_data hover_pointer" onClick={()=>setShow(true)}>
                 {likes.length === 1 ? <b>1 like</b> : <b>{likes.length} likes</b>}
            </span>
        </>
    )
}
export default LikeCount