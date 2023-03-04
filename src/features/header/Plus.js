import { useState } from "react"
import { Modal } from "react-bootstrap"
import { PlusCircle } from 'react-bootstrap-icons'
import AddPost from '../posts/newPost/AddPost'


const Plus = () =>{
    const [add, showAdd]=useState(false)
    
    const handleClick = () => {
   
            showAdd(true)
       
    }
    return (
        <>
            <Modal show={add} onHide={() => showAdd(false)} dialogClassName="modal-60w" aria-labelledby="contained-modal-title-vcenter" centered>
                <AddPost closeModal={()=>showAdd(false)} />
                {/* <PickPhoto closeModal={()=>showAdd(false)} /> */}
            </Modal>

            {/* <Navbar.Text as="button" className="transparent_button" onClick={()=>showAdd(true)}>  */}
            <PlusCircle className="circle_button" onClick={handleClick} />
            {/* </Navbar.Text> */}
            


        </>
    )
}
export default Plus