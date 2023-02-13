import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import { loginUser } from '../userSlice';
import EmailInputBox from './EmailInputBox';
import PasswordInputBox from './PasswordInputBox';
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
          <EmailInputBox />
          <PasswordInputBox />

          <Button variant="primary" type="submit"> Login </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{justifyContent: 'flex-start'}}>
          Not registered yet, <Button variant="link" onClick={toggleLogin} className="p-0" >Signup</Button> here.
      </Modal.Footer>
    </>
  );
}

export default Login;