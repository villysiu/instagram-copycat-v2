import { useState } from "react"
import { Modal, Form, Button, CloseButton } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { currentUser } from "./userSlice"
import { editProfile } from "./userSlice"

import EditAvatar from "./EditAvatar"
const EditProfile = ({setShow}) =>{
    const currUser=useSelector(currentUser)
    const dispatch=useDispatch()
    const [name, setName] = useState(currUser.name)
    const [bio, setBio] = useState(currUser.bio)
    const [preview, setPreview] = useState(null)
    const [avatar, setAvatar] = useState(currUser.avator)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name)
        console.log(preview)
        const formData=new FormData()

        formData.append("name", name)
        formData.append("bio", bio)
        formData.append("avator", preview)
        
        dispatch(editProfile({formData: formData}))
        e.target.reset()
    }
    const handleCancel = () => {
        setShow(false)
    }

    return (
        <>
        
            <Modal.Header closeButton>
                <Modal.Title style={{fontSize: "20px"}}>Edit porfile</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
                
            <Form onSubmit={handleSubmit}>
                <EditAvatar currUser={currUser} avatar={avatar} setAvatar={setAvatar} preview={preview} setPreview={setPreview} />
           
               
                <fieldset disabled>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder={currUser.email} />
                    </Form.Group>
                </fieldset>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" value={name} placeholder="User Name" 
                        onChange={e=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Bio</Form.Label>
                    <Form.Control type="text" name="bio" as="textarea" rows="5" value={bio} placeholder="Bio"
                        onChange={e=>setBio(e.target.value)}  />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" onClick={handleCancel} className="mx-3">
                    Cancel
                </Button>
                
            </Form>
            </Modal.Body>

        </>
    )
}
export default EditProfile