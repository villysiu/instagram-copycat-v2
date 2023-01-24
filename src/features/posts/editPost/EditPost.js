import { useDispatch, useSelector } from "react-redux"
import { selectPostbyId } from "../postsSlice"
import { useState } from "react"
import { editAPost } from "../postsSlice"
import { Modal, Form, Button, Image } from "react-bootstrap"

const EditPost = ({postId}) =>{
    const post = useSelector(state=>selectPostbyId(state, postId))
    const dispatch=useDispatch()
    const [desc, setDesc] = useState(post.desc)

    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("desc", desc)
        
        dispatch(editAPost({postId: post.id, formData: formData}))
        e.target.reset()
    }
    

    return (
        <>
        <Modal.Header closeButton >
            <Modal.Title>Edit post</Modal.Title>
        </Modal.Header>

        <Image className="card_img" src={`http://localhost:3000/${post.url}`} />

                          
        <Form onSubmit={handleSubmit} >
            <Modal.Body>                 
                <Form.Group className="mb-3 px-3">               
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="5" name="desc" value={desc} placeholder="Description" 
                        onChange={e=>setDesc(e.target.value)} />
                </Form.Group> 
            </Modal.Body>                     
            <Modal.Footer>
                
                <Button variant="primary"  type='submit'>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Form>
                  
        </>
                    
    )
}
export default EditPost