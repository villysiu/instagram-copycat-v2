import { Dropdown } from "react-bootstrap"

const RemoveAvatar = ({setPreview, setAvatar}) => {
    
    const handleRemove=()=>{
        console.log("in remove?")
        setPreview(null)
        setAvatar(null) 
    }
    return (
        <Dropdown.Item onClick={handleRemove} >Remove Current Photo</Dropdown.Item>
    )
}
export default RemoveAvatar