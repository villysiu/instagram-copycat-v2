import { useState } from "react"
import { Navbar, Modal } from "react-bootstrap"
import { PlusCircle } from 'react-bootstrap-icons'
import AddPost from '../posts/newPost/AddPost'

import { useDispatch } from 'react-redux';
import { logoutUser } from "../user/userSlice";

const Plus = () =>{
    const [add, showAdd]=useState(false)
    const dispatch=useDispatch();
    const handleClick = () => {
        const expiry = localStorage.getItem("expiry")
        const now = Date.now()
        console.log(expiry>now)
        if(expiry<now){
            console.log("expored")
            dispatch(logoutUser())

        }
        else {
            showAdd(true)
        }
    }
    return (
        <>
            <Modal show={add} onHide={() => showAdd(false)} dialogClassName="modal-60w">
                <AddPost closeModal={()=>showAdd(false)} />
            </Modal>

            {/* <Navbar.Text as="button" className="transparent_button" onClick={()=>showAdd(true)}>  */}
            <PlusCircle className="circle_button" 
            // onClick={()=>showAdd(true)} 
            onClick={handleClick} 
            />
            {/* </Navbar.Text> */}
        </>
    )
}
export default Plus