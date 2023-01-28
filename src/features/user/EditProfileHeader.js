import AvatarPreview from "./AvatarPreview"
import {  useRef } from "react"
import { Button, Form } from "react-bootstrap"
const EditProfileHeader = ({currUser, preview, setPreview}) =>{
    let fileRef = useRef(null);
    console.log(currUser)
    const handlePreview=(e)=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return;
        setPreview(e.target.files[0])
    }
    const handleClick=(r)=>{
        console.log("i m clickes")
        fileRef.click()
    }
    return (
        <>

            <Form.Control 
                ref={refParam => fileRef = refParam}
                type="file" hidden={true} name="avator" accept="image/*" onChange={e=>handlePreview(e)}/>

           
                    <AvatarPreview currAvatar={currUser.avator} preview={preview} initial={currUser.name[0]} />
                    {currUser.name }
                    <Button variant="link" onClick={handleClick}>
                                change avator
                    </Button>
                  
        </>
    )
}
export default EditProfileHeader