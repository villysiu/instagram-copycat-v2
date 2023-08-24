import { useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { editProfile } from "../usersSlice"
import { editAvatar, deleteAvatar } from "../usersSlice"
import BioTextareaBox from "../session/BioTextareaBox"
// import { selectUserbyId } from "../usersSlice"
import EditAvatar from "./editAvatar/EditAvatar"
import FloatingInputBox from "../session/FloatingInputBox"

const EditProfile = ({setShow, currUser}) =>{
    
    const dispatch=useDispatch();
    const [avatar, setAvatar] = useState(currUser? currUser.avatar : null)
    const [username, setUsername] = useState(currUser.name)
    const [bio, setBio] = useState(currUser.bio)
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(username !== currUser.name || bio !== currUser.bio){
            const formData=new FormData()
            if(username !== currUser.name) 
                formData.append("name", username)
            if(bio !== currUser.bio)
                formData.append("bio", bio)
            dispatch(editProfile({user: Object.fromEntries(formData)}))
        }
            
        if(avatar !== currUser.avatar){
            const formData2=new FormData()
            if(avatar){
                formData2.append("avatar", avatar)
                console.log(formData2)
                dispatch(editAvatar(formData2))
            }
            else{
                dispatch(deleteAvatar())
            }
        }
        setShow(false)
    }
    return (

        <Form>

            <Modal.Header className="add_post_modal_header" >
                <div className="cancel_button" onClick={()=>setShow(false)}>Cancel</div>
                <Modal.Title className="add_post_modal_title">Edit porfile</Modal.Title>
                <div className="done_button" onClick={handleSubmit}>Done</div>
            </Modal.Header>

            <Modal.Body className="py-0">   
                <EditAvatar initial={currUser.name[0]} avatar={currUser.avatar} setAvatar={setAvatar} /> 
                
                <fieldset disabled>
                    <FloatingInputBox itemNameTxt="email" itemDisplayTxt="Email address" item={currUser.email} setItem={null} />
                </fieldset>
            
                <FloatingInputBox itemNameTxt="username" itemDisplayTxt="User Name" item={username} setItem={setUsername} />
        
                <BioTextareaBox bio={bio} setBio={setBio} />


            </Modal.Body>            
            
        </Form>
    
    )
}
export default EditProfile