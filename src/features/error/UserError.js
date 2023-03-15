import { CloseButton } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const UserError = () => {
    const userError=useSelector(state=>state.user.error)

    const [show, setShow] = useState(false)
    useEffect(()=>{
        setShow(userError)
    }, [userError])
    
    return (
        <>
        {show && <Alert variant="danger" bsPrefix="alert">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {userError}
                <CloseButton onClick={()=>setShow(false)}/>
            </div>
        </Alert> }
        </>
    )
}
export default UserError