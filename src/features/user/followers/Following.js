import { Modal } from "react-bootstrap"
import { useState } from "react"
import FollowingList from "./FollowingList"
import { X } from "react-bootstrap-icons"
const Following = ({followings, userId}) => {
    const [show, setShow] = useState(false)
    if(followings.length===0){
        return (
            <div className="pro_data">
                <span className='bold_font'> {followings.length}</span> following
            </div>
        )
    }
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="followers_modal" centered style={{width: '250px !important'}}>
                <X className="followers_modal_close_btn hover_pointer" onClick={()=>setShow(false)} />
                <div className="followers_modal_title  border-bottom">Following</div>
                    <FollowingList followings={followings} userId={userId} setShow={setShow} /> 
            </Modal>
            <div className="pro_data hover_pointer" onClick={()=>setShow(true)}>
                <b className="blk">{followings.length}</b> following
            </div>
        </>
    )
}
export default Following