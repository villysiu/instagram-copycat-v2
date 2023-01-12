import AddPhotoForm from "./AddPhotoForm"
import AddPhotoDesc from "./AddPhotoDesc"
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Modal } from "react-bootstrap"
import { addNewPost } from "./postsSlice"
import { currentUser } from "../user/userSlice"

const AddPost=({showModalCB})=>{
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
    const handleDesc=(e)=>setDesc(e.target.value)
    
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
        showModalCB();
    
        
    }
   
    return (
<>
   
        <Modal.Header closeButton onClick={()=>showModalCB()}>
          <Modal.Title>Add a new photo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form onSubmit={handleSubmit} >
                
                <AddPhotoForm fileRef={fileRef} preview={preview} handlePreview={handlePreview} handleRemove={handleRemove} />
                <AddPhotoDesc desc={desc} handleDesc={handleDesc} />
                

                <Button variant="primary" type="submit">
                    Add Photo
                </Button>
        
            </Form>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}

       </>
    )
}
export default AddPost