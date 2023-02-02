import AvatarPreview from "./AvatarPreview"
import { useState, useRef } from "react"
import { Form } from "react-bootstrap"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EditAvatar = ({currUser, setPreview}) =>{
    const [link, setLink] = useState(currUser.avator && `http://localhost:3000/${currUser.avator}`)

    let fileRef = useRef(null);
    console.log(currUser)
    const handlePreview=(e)=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return;   
        setPreview(e.target.files[0])
        setLink(URL.createObjectURL(e.target.files[0]))
    }
    const handleClick=()=>{
        console.log("i m clickes")
        fileRef.click()
    }
    const handleRemove=()=>{
        setPreview(null)
        setLink(null)
    }
    return (
        <>
            <Form.Control 
                ref={refParam => fileRef = refParam}
                type="file" hidden={true} name="avator" accept="image/*" onChange={e=>handlePreview(e)}
            />

            <Form.Group className="mb-3">
                <AvatarPreview link={link} initial={currUser.name[0]} />
                {currUser.name}
                
                <DropdownButton
                    as={ButtonGroup}
                    variant="light" size="sm"
                    title="Change Avatar"
                    className="ms-2"
                >
                    <Dropdown.Item onClick={handleClick} >Upload Photo</Dropdown.Item>
                    <Dropdown.Item onClick={handleRemove} >Remove Current Photo</Dropdown.Item>
                    
                    <Dropdown.Divider />
                    <Dropdown.Item>Cancel</Dropdown.Item>
                </DropdownButton>
                  
            </Form.Group>
        </>
    )
}
export default EditAvatar