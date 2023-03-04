import { useState, useMemo } from "react";
import { useDispatch } from "react-redux";

import { Form, Button} from "react-bootstrap";
import { addComment } from "../postsSlice";

const AddComment = ({post_id}) => {
    const dispatch = useDispatch();
    
    // const formRef=useRef()
    const [comment, setComment]=useState("")
    const handleSubmit=(e)=>{
        
        console.log(e.target.value)
        e.preventDefault();
        const formData=new FormData()
        formData.append("comment", comment)
        dispatch(addComment( {postId: post_id, formData: formData } ))
        setComment("")
    }
    return useMemo(()=>{
    return (
      <Form  onSubmit={handleSubmit} >
          <div style={{textAlign: "left", display: "flex", fontSize: "13.6px"}}>
             <Form.Control as="textarea" bsPrefix="comment_input"
            name="comment" rows="1" placeholder="Add a comment" 
            value={comment} onChange={e=>setComment(e.target.value)} /> 
          
          
          <Button className="submit_comment" type='submit'>
                Post
            </Button>
          </div>
        </Form>
    )
    },[comment])
}
export default AddComment