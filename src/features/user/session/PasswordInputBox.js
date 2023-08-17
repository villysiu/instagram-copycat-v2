import { Form } from "react-bootstrap"
import { useState } from "react"
import { Eye, EyeSlash } from "react-bootstrap-icons"

const PasswordInputBox = ({password, setPassword}) => {
    const [show, setShow] = useState(false)
    return (
        <Form.Group className="float-group">
           
            <Form.Control type={show? "text" : "password" }
                    id="password-input" 
                    className="float-input" 
                    name="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)} 
                    required
            />
            <Form.Label className='float-label' htmlFor="password-input">Password</Form.Label>

            {show? 
                <EyeSlash onClick={()=>setShow(false)} className="password-eye"/> 
                : 
                <Eye onClick={()=>setShow(true)}  className="password-eye" />
            }
  
          </Form.Group>
    )
}
export default PasswordInputBox