import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import { loginUser } from './userSlice';
const Login=({toggleLogin})=>{
  const formRef=useRef()
  const dispatch=useDispatch();

  const handleSubmit=e=>{
      e.preventDefault()
      const formData=new FormData(formRef.current)
      dispatch(loginUser({user: Object.fromEntries(formData)}))
      e.target.reset() 
  }
    return(
    <>
    
      <Modal.Header closeButton >
        <Modal.Title>Welcome back! </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
          </Form.Group>
      
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
    <Modal.Footer style={{justifyContent: 'flex-start'}}>Not registered yet, <a href="#signup" onClick={toggleLogin} >Signup</a> here</Modal.Footer>
    </>
  );
}

export default Login;