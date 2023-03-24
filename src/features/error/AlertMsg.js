import { CloseButton } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import { useState, useEffect } from 'react';
const AlertMsg = ({msg}) => {
    
    const [show, setShow] = useState(false)
    useEffect(()=>{
        setShow(msg)
    }, [msg])
    return (
        <>
        {show && <Alert variant="danger" bsPrefix="alert">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {msg}
                <CloseButton onClick={()=>setShow(false)}/>
            </div>
        </Alert> }
        </>
    )
}
export default AlertMsg