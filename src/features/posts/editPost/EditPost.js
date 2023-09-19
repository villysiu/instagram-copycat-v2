import { useDispatch } from "react-redux"
import { useState} from "react"
import { editAPost } from "../postsSlice"
import { backendAPI } from "../../../app/helper"
import NewPostHeader from "../newPost/NewPostHeader"
import DescForm from "../newPost/DescForm"
import { Form, Modal } from "react-bootstrap"
const EditPost = ({ post, setShow }) =>{
    const dispatch = useDispatch()
    const [desc, setDesc] = useState(post.desc.comment)

    const handleSubmit=e=>{
        e.preventDefault()
        
        const formData=new FormData()
        formData.append("desc", desc)
        
        dispatch(editAPost({postId: post.id, formData: formData}))
        setShow(false)
        
    }
    return (
        <Form className="add_post_form_wrapper">
            <NewPostHeader title="Edit post" setShow={setShow} desc={desc} handleSubmit={handleSubmit} />
            <DescForm img={`${backendAPI}/${post.url}`} setDesc={setDesc} desc={desc} />

        </Form>

    )
}
export default EditPost