import { useDispatch } from "react-redux"
import { useState } from "react"
import { editAPost, deleteAPost } from "./postsSlice"
import { Modal, Form, Button } from "react-bootstrap"
import AddPhotoDesc from "./AddPhotoDesc"

const EditPost = ({post}) =>{
    const dispatch=useDispatch()
    const [desc, setDesc] = useState(post.desc)
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("desc", desc)
        console.log(post.photo_id)
        dispatch(editAPost({postId: post.photo_id, formData: formData}))
        e.target.reset()
    }
    const handleDelete=e=>{
        e.preventDefault()
        dispatch(deleteAPost(post.photo_id))
    }
    const handleDesc=(e)=>setDesc(e.target.value)

    
    return (
        <>
        <Modal.Header closeButton />
        <Form onSubmit={handleSubmit} >
            <Modal.Body>
                <Form.Group className="mb-3">               
                    <AddPhotoDesc desc={desc} handleDesc={handleDesc} />
                </Form.Group> 
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                <Button variant="primary" type='submit'>
                    Save Changes
                </Button>
            </Modal.Footer>
            </Form>
        </>
    )
}
export default EditPost