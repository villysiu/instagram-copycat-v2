// import { useDispatch } from "react-redux";
import { useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
// import { editAvatar } from "../../userSlice";

const UploadAvatar = ({setPreview, setAvatar}) => {
    // const dispatch=useDispatch()
    let fileRef = useRef(null);
    const handleSubmit=(e)=>{
        if(e.target.files.length===0)  return;   
        
        setPreview(URL.createObjectURL(e.target.files[0]))
        setAvatar(e.target.files[0])
        // const formData=new FormData()
        // formData.append("avatar", e.target.files[0])
        // dispatch(editAvatar({formData: formData}))

    }
    const handleClick=()=>{
        console.log("i m clickes")
        fileRef.click()
    }
    return(
        <>
            <Form.Control 
                ref={refParam => fileRef = refParam} value=""
                type="file" hidden={true} name="avatar" accept="image/*" onChange={e=>handleSubmit(e)}
            />
            <Dropdown.Item onClick={handleClick} >Upload Photo</Dropdown.Item>
        </>
        
    )
}
export default UploadAvatar