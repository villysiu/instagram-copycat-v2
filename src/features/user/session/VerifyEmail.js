import { useRef,useState } from 'react';
import { Modal, ModalHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';


import { verifyEmail } from '../usersSlice';
import FloatingInputBox from './FloatingInputBox';

import Signup2 from './SignUp2';

const VerifyEmail=({toggleLogin, setShow, show})=>{
    console.log("signup form")
    console.log(show)
    const dispatch=useDispatch()
    // const formRef = useRef()
    const emailExisted = useSelector(state=>state.users.emailExisted)
    const [email, setEmail] = useState("")
    const [button, setButton] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
        const formData=new FormData()
        formData.append('email', email)
        dispatch(verifyEmail({user: {'email': email}}))
        setButton(true)
    }
    if(button && !emailExisted){
        // setButton(false)
        return (
            <Signup2 email={email} setShow={setShow} />
        )
    }
    return(
        <>
        <Modal.Header className="user_modal_header" closeButton >
            <Modal.Title className="user_modal_title">Sign up for free.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form onSubmit={handleSubmit}>
                <FloatingInputBox itemNameTxt="email" itemDisplayTxt="Email Address" item={email} setItem={setEmail} />
                {button && emailExisted && 
                    <div>oh no email </div>
                }
                <Button variant="primary" size="sm" type="submit">Continue</Button>
            </Form>
 
        </Modal.Body>
        <Modal.Footer className="user_modal_footer">
            Already registered, <div className="blue_text" onClick={()=>toggleLogin(true)} >Login</div> here.
        
        </Modal.Footer>
      </>
    );
}

export default VerifyEmail