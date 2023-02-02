import { useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import {  PersonCircle } from 'react-bootstrap-icons'
import { Modal } from "react-bootstrap"

const User = () =>{
    // const user=useSelector(currentUser) 
    const [modal, showModal]=useState(false)
    const [login, toggleLogin] = useState(true)
    
    return (
        <>
            <Modal show={modal} onHide={()=>showModal(false)} >
                {login? <Login toggleLogin={()=>toggleLogin(false) }  /> : <Signup toggleLogin={()=>toggleLogin(true)}  />}
            </Modal>
           
            <PersonCircle className="circle_button" onClick={()=>showModal(true)}/>
        </>

    )
}
export default User;