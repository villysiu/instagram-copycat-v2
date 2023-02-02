import { useRef } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { signupUser } from './userSlice';
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
     
                <Form.Group className="mb-3 shift-group" controlId="formBasicEmail">
                    
                    <Form.Control required type="email" id="email-input" className="shift-input" name="email" placeholder="Email address"/>
                    <Form.Label className="shift-label" for="email-input">Email address</Form.Label>
                    
                </Form.Group>
        
                <Form.Group className="mb-3 shift-group" controlId="formBasicName">
                    <Form.Control required type="text" id="username-input" className="shift-input" name="name" placeholder="User name"  />
                    <Form.Label className='shift-label' for="username-input">User name</Form.Label> 
                </Form.Group>
                
                

                <Form.Group className="mb-3 shift-group" controlId="formBasicPassword">
                    
                    <Form.Control required type="password" id="password-input" className="shift-input" name="password" placeholder="Password" />
                    <Form.Label className='shift-label' for="password-input">Password</Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
 
        </Modal.Body>
        <Modal.Footer style={{justifyContent: 'flex-start'}}>
        Already registered, <Button variant="link" onClick={toggleLogin} className="p-0" >Login</Button> here.
        </Modal.Footer>
      </>
    );
}

export default Signup;