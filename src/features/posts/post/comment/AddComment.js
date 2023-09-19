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
    const handleChange = (e) => {
        setComment(e.target.value)
        e.target.style.maxHeight = '100px';
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
    }
    const resetTextarea = ()=>{
        const elems = document.getElementsByName("comment");
        for(let elem of elems){
            // console.log(elem)
            elem.style.height = '46px'
        }
    }
    if(!currUser) return null;
    
    return (
        <div className="p-2 border-top">
            <Form  onSubmit={handleSubmit} className="flex_row_center" >
                <Form.Control as="textarea" bsPrefix="comment_input" 
                    id="comment" name="comment" placeholder="Add a comment" 
                    value={comment} 
                    onChange={handleChange} 
                /> 

                <div className="add_comment_button" onClick={handleSubmit}>POST</div>
                
            </Form>
        </div>
    )

}
export default AddComment