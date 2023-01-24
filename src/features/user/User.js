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
           
            <h3><PersonCircle color="black" onClick={()=>showModal(true)}/></h3>
        </>

    )
}
export default User;