import { Form, Button } from 'react-bootstrap'
const AddPhotoForm=({fileRef, preview, handlePreview, handleRemove})=>{

    return(
        <>
            <Form.Group className="mb-3">
                <Form.Control ref={fileRef} type="file" name="url" accept="image/*" onChange={e=>handlePreview(e)}/>
            </Form.Group>

            {preview && 
            <>
                <img src={URL.createObjectURL(preview)} alt="name" height="120px" border="1px" />
                <Button varaint="primary" size="sm" onClick={()=>handleRemove()}>Remove</Button>
            </> }
        </>
    )
}
export default AddPhotoForm