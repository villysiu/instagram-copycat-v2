import { Modal, Button, Form } from "react-bootstrap"
import { CloudUploadFill } from "react-bootstrap-icons"
import { useRef } from "react";
const UploadImage = ({handlePreview}) => {
    const fileRef = useRef(null);
    const handleClick = () => {
        fileRef.current.click();
      };
    return (
        <div 
        className="upload_modal"
        >
                
            <Modal.Header className="upload_header">
                <Modal.Title className="add_post_modal_title ">Create new post</Modal.Title>
            </Modal.Header>
            <div className="upload_body">
                {/* <div>
                    Drag image here 
                    <CloudUploadFill />
                </div> */}
                
                <div>
                    <Form.Control ref={fileRef} type="file" name="url" accept="image/*" 
                    style={{display: "none"}} 
                    onChange={e=>handlePreview(e)}/>
                    <Button onClick={handleClick}>Select from Computer</Button>
                </div>
            
            </div>
            
        </div>
    )
}
export default UploadImage