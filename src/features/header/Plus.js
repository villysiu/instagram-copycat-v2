import { useState } from "react"
import { Modal } from "react-bootstrap"
import { PlusCircle } from 'react-bootstrap-icons'
import AddPost from '../posts/newPost/AddPost'


const Plus = () =>{
    const [show, setShow]=useState(false)
    
    

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="add_post_modal" >
                <AddPost setShow={setShow} />
            </Modal>

            <PlusCircle className="circle_button" onClick={()=>setShow(true)} />
        </>
    )
}
export default Plus