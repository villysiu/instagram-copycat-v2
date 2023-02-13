import { useRef } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { signupUser } from '../userSlice';
import EmailInputBox from './EmailInputBox';
import UserNameInputBox from './UserNameInputBox';
import PasswordInputBox from './PasswordInputBox';
const Signup=({toggleLogin})=>{
    console.log("signup form")
    const dispatch=useDispatch()
    const formRef = useRef()

    const handleSubmit=(e)=>{
        e.preventDefault()
       
        const formData=new FormData(formRef.current)
        dispatch(signupUser({user: Object.fromEntries(formData)}))
        e.target.reset() 
    }
    return(
        <>
        <Modal.Header closeButton >
            <Modal.Title>Sign up for free.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
            <Form ref={formRef} onSubmit={handleSubmit}>
                <EmailInputBox />
                <UserNameInputBox />
                <PasswordInputBox />
                
                
                <Button variant="primary" type="submit">Signup</Button>
            </Form>
 
        </Modal.Body>
        <Modal.Footer style={{justifyContent: 'flex-start'}}>
        Already registered, <Button variant="link" onClick={toggleLogin} className="p-0" >Login</Button> here.
        </Modal.Footer>
      </>
    );
}

export default Signup;