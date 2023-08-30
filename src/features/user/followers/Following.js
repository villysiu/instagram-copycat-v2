import { Modal } from "react-bootstrap"
import { useState } from "react"
import FollowingList from "./FollowingList"
import { X } from "react-bootstrap-icons"
const Following = ({following}) => {
    const [show, setShow] = useState(false)
    if(following.length===0){
        return (
            <div className="me-5">
                <span className='bold_font'> {following.length}</span> following
            </div>
        )
    }
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="followers_modal" centered style={{width: '250px !important'}}>
                <X className="followers_modal_close_btn hover_pointer" onClick={()=>setShow(false)} />
                <div className="followers_modal_title  border-bottom">Following</div>
                <FollowingList users={following} setShow={setShow} /> 
            </Modal>
            <div className="me-5 hover_pointer" onClick={()=>setShow(true)}>
                <b>{following.length}</b> following
            </div>
        </>
    )
}
export default Following