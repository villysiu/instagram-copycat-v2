import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, Button, Image } from "react-bootstrap"
import { addNewPost } from "../postsSlice"
import UploadImage from "./UploadImage"
import { currentUserId } from "../../user/userSlice"
import { useHref, useNavigate } from "react-router-dom"

const AddPost=({closeModal})=>{
    const currUseId=useSelector(currentUserId)
    // const userStatus = useSelector(state => state.user.status)

    const [preview, setPreview]=useState(null)
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()
    const navigate=useNavigate();
    const href=useHref();
    const handlePreview=(e)=>{
        
        e.preventDefault();
        if(e.target.files.length===0) return;
        setPreview(e.target.files[0])
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(preview)
        const formData=new FormData()
        formData.append('user_id', currUseId)
        formData.append('desc', desc)
        formData.append('url', preview)

        dispatch(addNewPost(formData))

        e.target.reset();
        setPreview(null);
        closeModal();

        if(href!=="instagram-copycat-v2")
            navigate("instagram-copycat-v2")
        
    }
  
    if(preview===null){
        return (
            <UploadImage handlePreview={handlePreview}/>
        )
    }
    return (
        <>
        <Form onSubmit={handleSubmit} >
            <div className="new-post-header">
                <Button className="transparent_button" onClick={closeModal}>Cancel</Button>
                <h5>Create new post</h5>
                <Button className="transparent_button" type="submit">Share</Button>
            </div>

            <div className="mb-1">
                <Image src={URL.createObjectURL(preview)} alt="name" className="preview_img" />
            </div>
                
            <Form.Control as="textarea" bsPrefix="comment_input" name="desc" rows="5" value={desc} 
                placeholder="Write a caption..." onChange={e=>setDesc(e.target.value)} />
         
        </Form>

       </>
    )
}
export default AddPost