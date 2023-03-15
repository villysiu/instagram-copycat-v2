import { useState } from "react"
import { Modal } from "react-bootstrap"
import { PlusCircle } from 'react-bootstrap-icons'
import AddPost from '../posts/newPost/AddPost'


const Plus = () =>{
    const [add, showAdd]=useState(false)
    
    const handleClick = () => (showAdd(true))

    return (
        <>
            <Modal show={add} onHide={() => showAdd(false)} dialogClassName="modal-60w" aria-labelledby="contained-modal-title-vcenter" centered>
                <AddPost closeModal={()=>showAdd(false)} />
            </Modal>

            <PlusCircle className="circle_button" onClick={handleClick} />
        </>
    )
}
export default Plus