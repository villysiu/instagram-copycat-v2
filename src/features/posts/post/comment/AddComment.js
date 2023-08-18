import { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Button} from "react-bootstrap";
import { addComment } from "../../postsSlice";
import { useSelector } from "react-redux"

const AddComment = ({postId}) => {
    
    const dispatch = useDispatch();
    const currUser=useSelector(state=>state.users.currUser.currUser) 
    const [comment, setComment]=useState("")

    const handleSubmit=(e)=>{
        // console.log(e)
        e.preventDefault();
        const formData=new FormData()
        formData.append("comment", comment)
        dispatch(addComment( {postId: postId, formData: formData } ))
        setComment("")

        resetTextarea()
    }
    const handleKeyUp = (e) => {
        // height: 27px; 
        e.target.style.maxheight = '100px';
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }
    const resetTextarea = ()=>{
        const elems = document.getElementsByName("comment");
        for(let elem of elems){
            // console.log(elem)
            elem.style.height = '27px'
        }
    }
    if(!currUser) return null;
    
    return (
        <div className="p-2 border-top">
            <Form  onSubmit={handleSubmit} className="form_comment_wrapper" >
                <Form.Control as="textarea" bsPrefix="comment_input" 
                    id="comment" name="comment" placeholder="Add a comment" 
                    value={comment} onChange={e=>setComment(e.target.value)} 
                    onKeyUp={e=>handleKeyUp(e)}
                    style={{height: '27px'}}
                    row="1"
                /> 

                <div className="add_comment_button" onClick={handleSubmit}>POST</div>
                
            </Form>
        </div>
    )

}
export default AddComment