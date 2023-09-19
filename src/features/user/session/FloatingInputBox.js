import { Form } from "react-bootstrap"
const FloatingInputBox = ({itemNameTxt, itemDisplayTxt, item, setItem}) => {

    return (
        <Form.Group className="float-group">
            <Form.Control 
                required  type="text" 
                id={`${itemNameTxt}-input`} 
                className="float-input" 
                name={itemNameTxt} 
                placeholder={itemDisplayTxt} 
                value={item} 
                onChange={e=>setItem(e.target.value)} 
            />
            <Form.Label className='float-label' htmlFor={`${itemNameTxt}-input`}>{itemDisplayTxt}</Form.Label> 
        </Form.Group>
    )
}

export default FloatingInputBox