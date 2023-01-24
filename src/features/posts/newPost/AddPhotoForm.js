import { Form, Button, Image } from 'react-bootstrap'

const AddPhotoForm=({fileRef, preview, handlePreview, handleRemove})=>{

    return(
        <>
            <Form.Group className="mb-3">
                <Form.Control ref={fileRef} type="file" name="url" accept="image/*" onChange={e=>handlePreview(e)}/>
            </Form.Group>
            
            {preview ?
            <>
                
                <Image src={URL.createObjectURL(preview)} alt="name" className="preview_img" />
                
                <Button varaint="primary" size="sm" onClick={()=>handleRemove()}>Remove</Button>
            </> 
            :
            <div className="preview_box">Preview</div>
        }
        </>
    )
}
export default AddPhotoForm