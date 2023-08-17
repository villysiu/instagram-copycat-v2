import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap';
import { loginUser } from '../usersSlice';
import PasswordInputBox from './PasswordInputBox';
import FloatingInputBox from './FloatingInputBox';
// import { duration } from '../../../app/helper';
// import { timeoutUser } from '../../../app/helper';

const Login=({toggleLogin})=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch=useDispatch();

  const handleSubmit=e=>{
      e.preventDefault()
      const formData=new FormData()
      formData.append("email", email)
      formData.append("password", password)
      dispatch(loginUser({user: Object.fromEntries(formData)}))
      .catch((error) => {
        console.log(error)
      })
    
      e.target.reset() 
  }
    return(
    <>
    
      <Modal.Header className="user_modal_header" closeButton >
        <Modal.Title className="user_modal_title">Welcome back! </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* <EmailInputBox email={email} setEmail={setEmail} /> */}
          <FloatingInputBox itemNameTxt="email" itemDisplayTxt="Email Address" item={email} setItem={setEmail} />
          <PasswordInputBox password={password} setPassword={setPassword} />

          <Button variant="primary" size="sm" type="submit"> Login </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="user_modal_footer">
          Not registered yet, <a href="#" onClick={()=>toggleLogin(false)}>Signup</a> here.
      </Modal.Footer>
    </>
  );
}

export default Login;