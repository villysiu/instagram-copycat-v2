import { useState } from "react"
import Login from "./Login"
import VerifyEmail from "./VerifyEmail"
import {Button} from "react-bootstrap"
import { Modal } from "react-bootstrap"


const User = ({display}) =>{

    const [show, setShow]=useState(false)
    const [login, toggleLogin] = useState(true)

    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} 
            dialogClassName="user_modal"
            >
                {login? 
                    <Login toggleLogin={toggleLogin } show={show} /> 
                    : 
                    <VerifyEmail toggleLogin={toggleLogin} show={show} setShow={setShow} />
                }
            </Modal>
           
            <div onClick={()=>setShow(true)}> 
                {display}
            </div>

            
        </>

    )
}
export default User;