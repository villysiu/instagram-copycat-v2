import { Form } from "react-bootstrap"

const EmailInputBox = () => {
    return (
        <Form.Group className="mb-3 shift-group">
            <Form.Control type="email" id="email-input" className="shift-input" name="email" placeholder="Email address" />
            <Form.Label className="shift-label" htmlFor="email-input">Email address</Form.Label>
          </Form.Group>
        
    )
}
export default EmailInputBox