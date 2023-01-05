import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { login } from '../../app/actions';
const Login=({toggleLogin, setUserCB})=>{
  const formRef=useRef()
    
  const handleSubmit=e=>{
      e.preventDefault()
      const formData=new FormData(formRef.current)
      login({user: Object.fromEntries(formData)}, setUserCB)
      e.target.reset() 
  }
    return(
    <>
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Form.Text><h2>Welcome back! </h2></Form.Text>  
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
    <div>Not registered yet, <a href="#signup" onClick={()=>toggleLogin()} >Signup</a> here</div>
    </>
  );
}

export default Login;