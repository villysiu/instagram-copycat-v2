
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login=({toggleLogin})=>{
    
    return(
    <>
    <Form>
      <Form.Text><h2>Welcome back! </h2></Form.Text>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div>Not registered yet, <a href="#signup" onClick={()=>toggleLogin()} >Signup</a> here</div>
    </>
  );
}

export default Login;