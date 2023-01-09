import { Form } from "react-bootstrap"
const AddPhotoDesc=({desc, handleDesc})=>{
    return (
        <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="desc" value={desc} placeholder="Description" 
                    onChange={e=>handleDesc(e)} />
        </Form.Group>
    )
}
export default AddPhotoDesc