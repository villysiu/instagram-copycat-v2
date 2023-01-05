import { Form } from "react-bootstrap"
const AddPhotoDesc=({handleDesc})=>{
    
    return (
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="desc" placeholder="Description" 
                    onChange={e=>handleDesc(e)} />
        </Form.Group>
    )
}
export default AddPhotoDesc