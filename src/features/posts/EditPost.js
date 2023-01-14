import { useDispatch } from "react-redux"
import { useState } from "react"
import { editAPost, deleteAPost } from "./postsSlice"
import { Modal, Form, Button, Image } from "react-bootstrap"

const EditPost = ({post}) =>{
    const dispatch=useDispatch()
    const [desc, setDesc] = useState(post.desc)
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("desc", desc)
        
        dispatch(editAPost({postId: post.id, formData: formData}))
        e.target.reset()
    }
    const handleDelete=e=>{
        e.preventDefault()
        dispatch(deleteAPost(post.id))
    }


    
    return (
        <>
        <Modal.Header closeButton ><Modal.Title>Edit photo</Modal.Title></Modal.Header>
        <Modal.Body>
            <Image width="100%" src={`http://localhost:3000/${post.url}`} />
        </Modal.Body>
        <Form onSubmit={handleSubmit} >
            <Modal.Body>
                <Form.Group className="mb-3">               
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="5" name="desc" value={desc} placeholder="Description" 
                        onChange={e=>setDesc(e.target.value)} />
                </Form.Group> 
                <Form.Group className="tttt">
                    <Button variant="danger" style={{marginRight: "5px"}} onClick={handleDelete}>
                        Delete
                    </Button>
                    
                    <Button variant="primary"  type='submit'>
                        Save Changes
                    </Button>
                </Form.Group>
            </Modal.Body>
            
        </Form>
        </>
    )
}
export default EditPost