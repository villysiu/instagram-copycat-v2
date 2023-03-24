import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import {  PersonCircle } from 'react-bootstrap-icons'
import {Button} from "react-bootstrap"
import { Modal } from "react-bootstrap"

const User = () =>{
    // const user=useSelector(currentUser) 
    const [modal, showModal]=useState(false)
    const [login, toggleLogin] = useState(true)
    
    return (
        <>
            <Modal show={modal} onHide={()=>showModal(false)} className="user-modal">
                {login? <Login toggleLogin={()=>toggleLogin(false) }  /> : <Signup toggleLogin={()=>toggleLogin(true)}  />}
            </Modal>
           
            {/* <PersonCircle className="circle_button" onClick={()=>showModal(true)}/> */}
            <Button variant="secondary" size="sm" className="mx-2" onClick={()=>showModal(true)}>Login</Button>
        </>

    )
}
export default User;