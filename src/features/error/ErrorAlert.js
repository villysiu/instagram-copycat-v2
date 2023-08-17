import { CloseButton } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const ErrorAlert = ({err, clearErr}) => {

    const [show, setShow] = useState(true)
    const dispatch = useDispatch()

    const handleClick=()=>{
        setShow(false)
        dispatch(clearErr())
    }
    return (
        <>
        {
            show &&
            <Alert variant="danger" className="alert_mod" >
                {err}
                <CloseButton onClick={handleClick}/>
            
            </Alert> 
        }
        </>
    )
}
export default ErrorAlert