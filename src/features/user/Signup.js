
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Signup=({toggleLogin})=>{

    
    return(
        <>
        <Form>
            <Form.Text><h2>Sign up for free.</h2></Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter user name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="passowrd" placeholder="Password" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Signup
            </Button>
      </Form>
      <div>Already registered, <a href="#login" onClick={()=>toggleLogin()} >Login</a> here.</div>
      </>
    );
}

export default Signup;