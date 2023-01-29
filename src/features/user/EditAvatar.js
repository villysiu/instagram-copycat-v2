import AvatarPreview from "./AvatarPreview"
import {  useRef } from "react"
import { Button, Form } from "react-bootstrap"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EditAvatar = ({currUser, avatar, setAvatar, preview, setPreview}) =>{
    let fileRef = useRef(null);
    console.log(currUser)
    const handlePreview=(e)=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return;
        setPreview(e.target.files[0])
    }
    const handleClick=()=>{
        console.log("i m clickes")
        fileRef.click()
    }
    const handleRemove=()=>{
        setPreview(null)
        setAvatar(null)
    }
    return (
        <>
            <Form.Control 
                ref={refParam => fileRef = refParam}
                type="file" hidden={true} name="avator" accept="image/*" onChange={e=>handlePreview(e)}
            />

           
            <AvatarPreview currAvatar={avatar} preview={preview} initial={currUser.name[0]} />
            {currUser.name }
            
            <DropdownButton
                as={ButtonGroup}
                variant="light"
                title="change avator"
            >
                <Dropdown.Item onClick={handleClick} >Upload Photo</Dropdown.Item>
                <Dropdown.Item onClick={handleRemove} >Remove Current Photo</Dropdown.Item>
                
                <Dropdown.Divider />
                <Dropdown.Item>Cancel</Dropdown.Item>
            </DropdownButton>
                  
        </>
    )
}
export default EditAvatar