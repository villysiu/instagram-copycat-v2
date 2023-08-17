import { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Button} from "react-bootstrap";
import { addComment } from "../../postsSlice";
import { useSelector } from "react-redux"

const AddComment = ({postId}) => {
    console.log("add comment")
    const dispatch = useDispatch();
    const currUserId=useSelector(state=>state.users.currUser.id) 
    const [comment, setComment]=useState("")

    const handleSubmit=(e)=>{
        console.log(e)
        // console.log(e.target.children)
        // console.log(e.target.comment)
        e.preventDefault();
        const formData=new FormData()
        formData.append("comment", comment)
        dispatch(addComment( {postId: postId, formData: formData } ))
        setComment("")
        const elems = document.getElementsByName("comment");
        console.log(elems)
        for(let elem of elems){
            console.log(elem)
            elem.style.height = '27px'
        }
    }
    const handleKeyUp = (e) => {
        // console.log(e.target.style)
        e.target.style.height = 'inherit';
        // e.target.style.maxHeight = '100px';
        e.target.style.height = `${e.target.scrollHeight}px`; 
      }
    // function textAreaAdjust(e) {
    //     // e.target.style.height = "27px";
    //     // e.target.style.maxHeight = '100px';
    //     e.target.style.height = (e.target.scrollHeight)+"px";
    //   }
    if(!currUserId) return null;
    
    return (
        <div className="p-2 border-top">
            <Form  onSubmit={handleSubmit} className="form_comment_wrapper" >
                <Form.Control as="textarea" bsPrefix="comment_input"
                    id="comment" name="comment" placeholder="Add a comment" 
                    value={comment} onChange={e=>setComment(e.target.value)} 
                    // rows="2"
                    onKeyUp={e=>handleKeyUp(e)}
                    // onKeyUp={e=>textAreaAdjust(e)}
                /> 

                <div className="add_comment_button" onClick={handleSubmit}>POST</div>
                
            </Form>
        </div>
    )

}
export default AddComment