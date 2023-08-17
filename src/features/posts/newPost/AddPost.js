import { useState } from "react"
import { useDispatch } from "react-redux"
import { Modal, Form } from "react-bootstrap"
import { addNewPost } from "../postsSlice"
import UploadImage from "./UploadImage"
import DescForm from "./DescForm"
// import { currentUserId } from "../../user/currUserSlice"
import { useHref, useNavigate } from "react-router-dom"

const AddPost=({setShow})=>{
    // const currUseId=useSelector(currentUserId)
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
        // console.log(preview)
        const formData=new FormData()
        formData.append('desc', desc)
        formData.append('url', preview)

        dispatch(addNewPost(formData))

        setDesc("")
        setPreview(null);
        setShow(false);

        if(href!=="instagram-copycat-v2")
            navigate("instagram-copycat-v2")
        
    }
  
    if(preview===null){
        return (
            <UploadImage handlePreview={handlePreview}/>
        )
    }
    return (
        <Form className="add_post_form_wrapper">
            <Modal.Header className="add_post_modal_header" >
                <div className="cancel_button" onClick={()=>setShow(false)}>Cancel</div>
                <Modal.Title className="add_post_modal_title">Add new post</Modal.Title>
                <div className="done_button" onClick={handleSubmit}>Done</div>
            </Modal.Header>
            <DescForm 
                    img={URL.createObjectURL(preview)} setDesc={setDesc} desc={desc} />
            
        </Form>

    )
}
export default AddPost