import { useDispatch, useSelector } from "react-redux"
import { selectPostbyId } from "../postsSlice"
import { useState} from "react"
import { editAPost } from "../postsSlice"
import { backendAPI } from "../../../app/helper"
import DescForm from "../newPost/DescForm"
import { Form, Modal } from "react-bootstrap"
const EditPost = ({ post, setShow }) =>{
    const dispatch = useDispatch()
    const [desc, setDesc] = useState(post.comments.find(c=>c.id===post.desc).comment)

    const handleSubmit=e=>{
        e.preventDefault()
        
        const formData=new FormData()
        formData.append("desc", desc)
        
        dispatch(editAPost({postId: post.id, formData: formData}))
        setShow(false)
        
    }
    return (
        <Form className="add_post_form_wrapper">
            <Modal.Header className="add_post_modal_header" >
                <div className="cancel_button" onClick={()=>setShow(false)}>Cancel</div>
                <Modal.Title className="add_post_modal_title">Edit post</Modal.Title>
                <div className="done_button" onClick={handleSubmit}>Done</div>
            </Modal.Header>
            <DescForm img={`${backendAPI}/${post.url}`} setDesc={setDesc} desc={desc} />

        </Form>

    )
}
export default EditPost