import { Modal } from "react-bootstrap"
import { useState } from "react"
import FollowersList from "./FollowersList"
import { X } from "react-bootstrap-icons"
const Followers = ({followers, userId}) => {
    const [show, setShow] = useState(false)
   
    if(followers.length===0){
        return (
            <div className="me-5">
                <span className='bold_font'> {followers.length}</span> followers
            </div>
        )
    }
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="followers_modal" centered >
                <X className="followers_modal_close_btn hover_pointer" onClick={()=>setShow(false)} />
                <div className="followers_modal_title border-bottom">Followers</div>
                <FollowersList followers={followers} userId={userId} setShow={setShow}/> 
            </Modal>
            <div className="me-5 hover_pointer" onClick={()=>setShow(true)}>
                <b> {followers.length}</b> followers
            </div>
        </>
    )
}
export default Followers