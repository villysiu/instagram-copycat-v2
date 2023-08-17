import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../usersSlice';
import { Form, Modal } from "react-bootstrap"
import PasswordInputBox from "./PasswordInputBox"
import FloatingInputBox from "./FloatingInputBox"
import EditAvatar from "../editUser/editAvatar/EditAvatar"
import BioTextareaBox from "./BioTextareaBox"
const Signup2 = ({email, setShow}) => {
    const dispatch=useDispatch()
    
    // const formRef = useRef()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [bio, setBio] = useState("")
    const [avatar, setAvatar] = useState(null)

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const formData=new FormData()
        formData.append('email', email)
        formData.append('name', username)
        formData.append('password', password)
        formData.append('bio', bio)
        
        const formData2=new FormData()
        
            formData2.append('avatar', avatar)
            // dispatch(editAvatar({formData: formData2}))
        
        dispatch(signupUser([Object.fromEntries(formData), formData2]))
        setShow(false)
    }
    return (
        <Form>
            <Modal.Header className="add_post_modal_header" >
                <div className="cancel_button" onClick={()=>setShow(false)}>Cancel</div>
                <Modal.Title className="add_post_modal_title">Sign up</Modal.Title>
                <div className="done_button" onClick={handleSubmit}>Done</div>
            </Modal.Header>
            <Modal.Body className="py-0">   
                <EditAvatar avatar={avatar} initial={email[0]} setAvatar={setAvatar} /> 
                <fieldset disabled>
                    <FloatingInputBox itemNameTxt="email" itemDisplayTxt="Email Address" item={email} setItem={null} />
                </fieldset>
                
                <FloatingInputBox itemNameTxt="username" itemDisplayTxt="User Name" item={username} setItem={setUsername} />
                <PasswordInputBox password={password} setPassword={setPassword} />
                
                <BioTextareaBox bio={bio} setBio={setBio} />

            </Modal.Body>
        </Form>
    )
}
export default Signup2