import { useState } from "react"
import Login from "./Login"
import VerifyEmail from "./VerifyEmail"
import {Button} from "react-bootstrap"
import { Modal } from "react-bootstrap"
import { PersonCircle } from 'react-bootstrap-icons'

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
           

            <div  className="post_header_l ">
                <PersonCircle className="circle_button mx-2" onClick={()=>setShow(true)}/>
                <div className='d-none d-lg-block'>
                    <div onClick={()=>setShow(true)}>
                        Login
                    </div>
                </div>
            </div>
            
        </>

    )
}
export default User;