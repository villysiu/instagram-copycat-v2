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
            dialogClassName="user_modal"
            >
                {login? 
                    <Login toggleLogin={toggleLogin }  /> 
                    : 
                    <VerifyEmail toggleLogin={toggleLogin} setShow={setShow} />}
            </Modal>
           

            <div  className="flex_row_center  me-2">
                <PersonCircle className="circle_button mx-2" onClick={()=>setShow(true)}/>
                <div className='d-none d-lg-block'>
                    <div style={{cursor: 'pointer'}} onClick={()=>setShow(true)}>
                        Login
                    </div>
                </div>
            </div>
            
        </>

    )
}
export default User;