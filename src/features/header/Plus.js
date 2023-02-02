import { useState } from "react"
import { Navbar, Modal } from "react-bootstrap"
import { PlusCircle } from 'react-bootstrap-icons'
import AddPost from '../posts/newPost/AddPost'
const Plus = () =>{
    const [add, showAdd]=useState(false)

    return (
        <>
            <Modal show={add} onHide={() => showAdd(false)} dialogClassName="modal-60w">
                <AddPost closeModal={()=>showAdd(false)} />
            </Modal>

            {/* <Navbar.Text as="button" className="transparent_button" onClick={()=>showAdd(true)}>  */}
            <PlusCircle className="circle_button" onClick={()=>showAdd(true)} />
            {/* </Navbar.Text> */}
        </>
    )
}
export default Plus