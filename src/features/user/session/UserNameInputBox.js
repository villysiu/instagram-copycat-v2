import { Form } from "react-bootstrap"
const UserNameInputBox = () => {

    return (
        <Form.Group className="mb-3 shift-group">
                    <Form.Control required type="text" id="username-input" className="shift-input" name="name" placeholder="User name"  />
                    <Form.Label className='shift-label' htmlFor="username-input">User name</Form.Label> 
                </Form.Group>
    )
}
export default UserNameInputBox