import { Form } from "react-bootstrap"
// import { useRef } from "react"
const BioTextareaBox = ({bio, setBio}) =>{
    const handleChange = (e) => {
        setBio(e.target.value)
        e.target.style.maxHeight = '200px';
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
      
    return (
        <Form.Group className="mb-3 float-group">
            <Form.Control type="text" as="textarea" id="bio-input" name="bio" 
                className="float-input" 
                placeholder="Bio"
                value={bio??""} 
                onChange={handleChange} 
            />
            <Form.Label className='float-label' htmlFor="bio-input">Bio</Form.Label> 
        </Form.Group>
    )
}
export default BioTextareaBox