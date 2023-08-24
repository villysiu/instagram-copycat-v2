import { Form } from "react-bootstrap"
import { useRef } from "react"
const BioTextareaBox = ({bio, setBio}) =>{
    const ref = useRef()
    const handleKeyUp = (e) => {
        e.target.style.maxheight = '100px';
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
      
    return (
        <Form.Group className="mb-3 float-group">
            <Form.Control type="text" as="textarea" id="bio-input" 
                className="float-input" name="bio" placeholder="Bio"
                value={bio??""} onChange={(e)=>setBio(e.target.value)} 
                onKeyUp={e=>handleKeyUp(e)}
                ref={ref}
           
            />
            <Form.Label className='float-label' htmlFor="bio-input">Bio</Form.Label> 
        </Form.Group>
    )
}
export default BioTextareaBox