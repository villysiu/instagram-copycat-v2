import AddPhotoForm from "./AddPhotoForm"
import AddPhotoDesc from "./AddPhotoDesc"
import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { Form, Button } from "react-bootstrap"
import { addNewPost } from "./postsSlice"

const AddPost=({user_id})=>{
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
        e.preventDefault()
        const formData=new FormData()
        formData.append('user_id', user_id)
        formData.append('desc', desc)
        formData.append('url', preview)
        for (const [key, value] of formData) {
            console.log(key, value)
          }
    
        dispatch(addNewPost(formData))
        e.target.reset();
        setPreview(null);
    
        
    }
   
    return (
        <div>
            <hr/>
            <h2>Add a new photo</h2>
            
            <Form onSubmit={handleSubmit} >
                
                <AddPhotoForm fileRef={fileRef} preview={preview} handlePreview={handlePreview} handleRemove={handleRemove} />
                <AddPhotoDesc handleDesc={handleDesc} />
                

                <Button variant="primary" type="submit">
                    Add Photo
                </Button>
        
            </Form>
        </div>
    )
}
export default AddPost