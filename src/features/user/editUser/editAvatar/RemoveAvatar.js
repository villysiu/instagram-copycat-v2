import { Dropdown } from "react-bootstrap"
import { deleteAvatar } from "../../userSlice"
import { useDispatch } from "react-redux"

const RemoveAvatar = ({setPreview}) => {
    const dispatch=useDispatch()
    const handleRemove=()=>{
        console.log("in remove?")
        setPreview(null)
        dispatch(deleteAvatar())
    }
    return (
        <Dropdown.Item onClick={handleRemove} >Remove Current Photo</Dropdown.Item>
    )
}
export default RemoveAvatar