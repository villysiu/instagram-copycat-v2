import { useState } from "react"
import { Modal } from "react-bootstrap"
import { PlusCircle } from 'react-bootstrap-icons'
import AddPost from '../posts/newPost/AddPost'
import { Link } from "react-router-dom"

const Plus = () =>{
    const [show, setShow]=useState(false)

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="add_post_modal" >
                <AddPost setShow={setShow} />
            </Modal>

            
            <div  className="flex_row_center ">
                <PlusCircle className="circle_button" onClick={()=>setShow(true)} />
                
                <div className='d-none d-lg-block'>
                    <div onClick={()=>setShow(true)}>
                        Create
                    </div>
                </div>
            </div>
        </>
    )
}
export default Plus