import { useState } from "react"
import Login from "./Login"
import VerifyEmail from "./VerifyEmail"
import {Button} from "react-bootstrap"
import { Modal } from "react-bootstrap"

const User = () =>{
    // const user=useSelector(currentUser) 
    const [show, setShow]=useState(false)
    const [login, toggleLogin] = useState(true)
    
    return (
        <>
            <Modal show={show} onHide={()=>setShow(false)} 
            // className="user-modal"
            dialogClassName="user_modal"
            >
                {login? 
                    <Login toggleLogin={toggleLogin }  /> 
                    : 
                    <VerifyEmail toggleLogin={toggleLogin} setShow={setShow} />}
            </Modal>
           
          
            <Button variant="secondary" size="sm" className="mx-2" onClick={()=>setShow(true)}>Login</Button>
        </>

    )
}
export default User;