import { useDispatch, useSelector } from "react-redux"
import { selectPostbyId } from "../postsSlice"
import { useState} from "react"
import { editAPost } from "../postsSlice"
import { Modal, Form, Button, Image } from "react-bootstrap"
import { Navigate, useHref, useNavigate, useLocation } from "react-router-dom"

const EditPost = ({ postId, showEdit }) =>{
    const post = useSelector(state=>selectPostbyId(state, postId))
    const dispatch=useDispatch()
    const [desc, setDesc] = useState(post.desc)
    const navigate=useNavigate();
    const herf=useHref();
   
    const handleClose = () =>{
        showEdit(false)
    }

    const handleSubmit=e=>{
        e.preventDefault()
        console.log(herf)
        console.log(herf===`/instagram-copycat-v2/posts/${postId}`)
        const formData=new FormData()
        formData.append("desc", desc)
        
        dispatch(editAPost({postId: post.id, formData: formData}))
        showEdit(false)
        // if(herf!==`/instagram-copycat-v2/posts/${postId}`){
        //     // console.log("are u here??")
        //     navigate(`/instagram-copycat-v2/posts/${postId}`);
        
        // }
    }
    return (
        
        <Form onSubmit={handleSubmit} >
       
            <div className="new-post-header">
                <Button className="transparent_button" onClick={handleClose}>Cancel</Button>
                <h5>Edit post</h5>
                <Button className="transparent_button" type="submit">Done</Button>
            </div>
            
        
            <div className="new-post-img">
                <Image className="card_img_300" src={`http://localhost:3000/${post.url}`} />
            </div> 

            <Form.Control as="textarea" rows="5" name="desc" value={desc} placeholder="Description" 
                bsPrefix="comment_input" 
                autoFocus
                onChange={e=>setDesc(e.target.value)} 
            />

        </Form>
                    
    )
}
export default EditPost