import { Modal, Button, Form } from "react-bootstrap"
import { CloudUploadFill } from "react-bootstrap-icons"
import { useRef } from "react";
const UploadImage = ({handlePreview}) => {
    const fileRef = useRef(null);
    const handleClick = () => {
        fileRef.current.click();
      };
    return (
        <div className="upload_window">
                
            <Modal.Header style={{justifyContent: "center"}}><h5>Create new post</h5></Modal.Header>
            <div style={{ justifyContent: "center", alignItems: "center", display: "grid", paddingTop: "150px" }}>
                <div>
                    Drag image here 
                    <CloudUploadFill />
                </div>
                
                <div>
                    <Form.Control ref={fileRef} type="file" name="url" accept="image/*" style={{display: "none"}} onChange={e=>handlePreview(e)}/>
                    <Button onClick={handleClick}>Select from Computer</Button>
                </div>
            
            </div>
            
        </div>
    )
}
export default UploadImage