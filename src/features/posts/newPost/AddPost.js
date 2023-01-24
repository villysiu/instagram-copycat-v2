import AddPhotoForm from "./AddPhotoForm"
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Modal } from "react-bootstrap"
import { addNewPost } from "../postsSlice"
import { currentUser } from "../../user/userSlice"

const AddPost=({closeModal})=>{
    const user=useSelector(currentUser) 
    const fileRef = useRef(null);
    const [preview, setPreview]=useState(null)
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()

    const handlePreview=(e)=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return;
        setPreview(e.target.files[0])
    }
    
    const handleRemove=()=>{
        setPreview(null)
        fileRef.current.value = null;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData()
        formData.append('user_id', user.id)
        formData.append('desc', desc)
        formData.append('url', preview)
        
        dispatch(addNewPost(formData))
        e.target.reset();
        setPreview(null);
        closeModal();
    
        
    }
   
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Add a new photo</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit} >
                <Modal.Body>
                    <AddPhotoForm fileRef={fileRef} preview={preview} handlePreview={handlePreview} handleRemove={handleRemove} />
            
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="desc" rows="5" value={desc} placeholder="Description" 
                            onChange={e=>setDesc(e.target.value)} />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Add Photo
                    </Button>
                </Modal.Footer>

            </Form>

       </>
    )
}
export default AddPost