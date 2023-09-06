import { Modal } from "react-bootstrap"
import { useState } from "react"

import { X } from "react-bootstrap-icons"
const FollowerWrapper = ({list, title, children}) => {
    const [show, setShow] = useState(false)
   
    if(list.length===0){
        return (
            <div className="pro_data">
                <b className='blk'>0</b> {title}
            </div>
        )
    }
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} dialogClassName="followers_modal" centered >
                <X className="followers_modal_close_btn hover_pointer" onClick={()=>setShow(false)} />
                <div className="followers_modal_title border-bottom">{title}</div>
                {children}
            </Modal>
            <div className="pro_data hover_pointer" onClick={()=>setShow(true)}>
                <b className="blk"> {list.length}</b> {title}
            </div>
        </>
    )
}
export default FollowerWrapper