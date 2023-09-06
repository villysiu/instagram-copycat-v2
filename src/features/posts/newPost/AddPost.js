import { useState } from "react"
import { useDispatch } from "react-redux"
import { Modal, Form } from "react-bootstrap"
import { addNewPost } from "../postsSlice"
import UploadImage from "./UploadImage"
import DescForm from "./DescForm"

// import { currentUserId } from "../../user/currUserSlice"
import { useHref, useNavigate } from "react-router-dom"
import NewPostHeader from "./NewPostHeader"

const AddPost=({setShow})=>{
    // const currUseId=useSelector(currentUserId)
    // const userStatus = useSelector(state => state.user.status)

    const [preview, setPreview]=useState(null)
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch()

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
        setShow(false);
    }
  
    if(preview===null){
        return (
            <UploadImage handlePreview={handlePreview}/>
        )
    }
    return (
        <Form className="add_post_form_wrapper">
            <NewPostHeader title="Add new post" setShow={setShow} desc={desc} handleSubmit={handleSubmit} />
            <DescForm img={URL.createObjectURL(preview)} setDesc={setDesc} desc={desc} />
            
        </Form>

    )
}
export default AddPost