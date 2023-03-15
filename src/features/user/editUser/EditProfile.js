import { useState, memo } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { currentUserId } from "../userSlice"
import { editProfile } from "../userSlice"
import { editAvatar, deleteAvatar } from "../userSlice"
import { selectUserbyId } from "../usersSlice"
import EditAvatar from "./editAvatar/EditAvatar"

const EditProfile = ({setShow}) =>{
    console.log("in edit porfile")

    const dispatch=useDispatch();
    const currUserId = useSelector(currentUserId)
    const currUser=useSelector(state=>selectUserbyId(state, currUserId))
    const [avatar, setAvatar] = useState(currUser? currUser.avatar : null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.username.value)
        const formData=new FormData()
        if(e.target.username.value !== currUser.name || e.target.bio.value !== currUser.bio ){
            formData.append("name", e.target.username.value)
            formData.append("bio", e.target.bio.value)
            
            dispatch(editProfile({formData: formData}))
        }

        const formData2=new FormData()
        if(avatar !== currUser.avatar){
            // console.log("different")
            if(avatar){
                formData2.append("avatar", avatar)
                dispatch(editAvatar({formData: formData2}))
            }
            else{
                dispatch(deleteAvatar())}
        }
        setShow(false)

    }
   
    const handleCancel = () => setShow(false)


    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Modal.Header>
                
                <Button variant="primary" onClick={handleCancel} className="transparent_button">
                    Cancel
                </Button>
                <Modal.Title>Edit porfile</Modal.Title>
                <Button className="transparent_button" type="submit">
                    Done
                </Button>
            </Modal.Header>

            <EditAvatar currUser={currUser} setAvatar={setAvatar} />

            <Modal.Body>    
                <fieldset disabled>

                    <Form.Group className="mb-3 float-group">
                    <Form.Control className="float-input" htmlFor="email-input" value={currUser.email} readOnly />
                    <Form.Label className='float-label' htmlFor="email-input">Email address</Form.Label> 
                </Form.Group>
                </fieldset>
                

                <Form.Group className="mb-3 float-group">
                    <Form.Control required type="text" id="username-input" className="float-input" name="username" placeholder="User name"
                        defaultValue={currUser.name} />
                    <Form.Label className='float-label' htmlFor="username-input">User name</Form.Label> 
                </Form.Group>

                <Form.Group className="mb-3 float-group">
                    <Form.Control required type="text" as="textarea" rows="5" id="bio-input" className="float-input" name="bio" placeholder="Bio"
                        defaultValue={currUser.bio} />
                    <Form.Label className='float-label' htmlFor="bio-input">Bio</Form.Label> 
                </Form.Group>

            </Modal.Body>            
        </Form>
        
        </>
    )
}
export default memo(EditProfile)