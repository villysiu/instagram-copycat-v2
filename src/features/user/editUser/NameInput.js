import { Form } from "react-bootstrap";
const NameInput = ({name, setName})=>{
    console.log("in name input")
    const rrr = e =>{
        e.preventDefault();
            setName(e.target.value)
    }
    return (
        <Form.Group className="mb-3 float-group">
        <Form.Control required type="text" id="username-input" className="float-input" name="name" placeholder="User name"
            value={name}  onChange={e=>rrr(e)} />
        <Form.Label className='float-label' htmlFor="username-input">User name</Form.Label> 
    </Form.Group>
    )
}
export default NameInput