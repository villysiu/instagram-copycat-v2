import { Form } from "react-bootstrap"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"

const PasswordInputBox = () => {
    const [show, setShow] = useState(false)
    return (
        <Form.Group className="mb-3 float-group">
           
            <Form.Control type={show? "text" : "password" }
                    id="password-input" 
                    className="float-input" 
                    name="password" 
                    placeholder="Password" />
            
            
            
            <Form.Label className='float-label' htmlFor="password-input">Password</Form.Label>
            {show? <EyeSlash onClick={()=>setShow(false)} className="password-input"/> 
            : <Eye onClick={()=>setShow(true)}  className="password-input" />
            }
  
          </Form.Group>
    )
}
export default PasswordInputBox