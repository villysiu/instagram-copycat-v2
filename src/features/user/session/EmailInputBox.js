import { Form } from "react-bootstrap"

const EmailInputBox = () => {
    return (
        <Form.Group className="float-group">
            <Form.Control type="email" id="email-input" className="float-input" name="email" placeholder="Email address" />
            <Form.Label className="float-label" htmlFor="email-input">Email address</Form.Label>
          </Form.Group>
        
    )
}
export default EmailInputBox