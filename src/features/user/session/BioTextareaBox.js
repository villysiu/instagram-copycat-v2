import { Form } from "react-bootstrap"
const BioTextareaBox = ({bio, setBio}) =>{
    
    const handleKeyUp = (e) => {
        console.log(e.target.style)
        e.target.style.height = 'inherit';
        e.target.style.maxHeight = '100px';
        e.target.style.height = `${e.target.scrollHeight}px`; 
      }
    return (
        <Form.Group className="mb-3 float-group">
            <Form.Control type="text" as="textarea" id="bio-input" 
                className="float-input" name="bio" placeholder="Bio"
                value={bio??""} onChange={(e)=>setBio(e.target.value)} 
                
                    onKeyUp={e=>handleKeyUp(e)}/>
            <Form.Label className='float-label' htmlFor="bio-input">Bio</Form.Label> 
        </Form.Group>
    )
}
export default BioTextareaBox