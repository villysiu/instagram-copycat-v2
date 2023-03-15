import { CloseButton } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
const PostError = () => {
    const postError=useSelector(state=>state.posts.error)
    const [show, setShow] = useState(false)
    useEffect(()=>{
        setShow(postError)
    }, [postError])
    return (
        <>
        {show && <Alert variant="danger" bsPrefix="alert">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {postError}
                <CloseButton onClick={()=>setShow(false)}/>
            </div>
        </Alert> }
        </>
    )
}
export default PostError