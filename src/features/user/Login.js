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
          <Form.Group className="mb-3 shift-group">
            <Form.Control type="email" id="email-input" className="shift-input" name="email" placeholder="Email address" />
            <Form.Label className="shift-label" htmlFor="email-input">Email address</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3 shift-group">
            <Form.Control type="password" id="password-input" className="shift-input" name="password" placeholder="Password" />
            <Form.Label className='shift-label' htmlFor="password-input">Password</Form.Label>
          </Form.Group>
      
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{justifyContent: 'flex-start'}}>
          Not registered yet, <Button variant="link" onClick={toggleLogin} className="p-0" >Signup</Button> here.
      </Modal.Footer>
    </>
  );
}

export default Login;