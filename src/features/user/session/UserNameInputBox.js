import { Form } from "react-bootstrap"
const UserNameInputBox = () => {

    return (
        <Form.Group className="mb-3 float-group">
            <Form.Control required type="text" id="username-input" className="float-input" name="name" placeholder="User name"  />
            <Form.Label className='float-label' htmlFor="username-input">User name</Form.Label> 
        </Form.Group>
    )
}
export default UserNameInputBox