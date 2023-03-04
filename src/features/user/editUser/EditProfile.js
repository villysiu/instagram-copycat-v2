import { useState, memo } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { editProfile } from "../userSlice"
import EditAvatar from "./editAvatar/EditAvatar"

const EditProfile = ({setShow, user}) =>{
    console.log("in edit porfile")
    // const { data } = useLoaderData();
    // console.log(data)
    // const currUser=useSelector(currentUser)
    // console.log(currUser)
    const dispatch=useDispatch()
    const [name, setName] = useState(user.name)
    const [bio, setBio] = useState(user.bio)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData=new FormData()

        formData.append("name", name)
        formData.append("bio", bio)
        dispatch(editProfile({formData: formData}))
        e.target.reset()
    }
   
    const handleCancel = () => {
        setShow(false)
    }

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

            <EditAvatar user={user} setShow={setShow}/>

            
                <Modal.Body>    
                    <fieldset disabled>

                        <Form.Group className="mb-3 float-group">
                        <Form.Control className="float-input" htmlFor="email-input" value={user.email} readOnly />
                        <Form.Label className='float-label' htmlFor="email-input">Email address</Form.Label> 
                    </Form.Group>
                    </fieldset>
                  

                    <Form.Group className="mb-3 float-group">
                        <Form.Control required type="text" id="username-input" className="float-input" name="name" placeholder="User name"
                            value={name}  onChange={e=>setName(e.target.value)} />
                        <Form.Label className='float-label' htmlFor="username-input">User name</Form.Label> 
                    </Form.Group>

                    <Form.Group className="mb-3 float-group">
                        <Form.Control required type="text" as="textarea" rows="5" id="bio-input" className="float-input" name="name" placeholder="Bio"
                            value={bio}  onChange={e=>setBio(e.target.value)} />
                        <Form.Label className='float-label' htmlFor="bio-input">Bio</Form.Label> 
                    </Form.Group>

                </Modal.Body>            
            </Form>
        
        </>
    )
}
export default memo(EditProfile)