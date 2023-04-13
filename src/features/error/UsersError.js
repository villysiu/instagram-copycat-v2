import { CloseButton } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
const UsersError = () => {
    const usersError=useSelector(state=>state.users.error)
    const [show, setShow] = useState(false)
    useEffect(()=>{
        setShow(usersError)
    }, [usersError])
    return (
        <>
        {show && <Alert variant="danger" bsPrefix="alert">
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {usersError}
                <CloseButton onClick={()=>setShow(false)}/>
            </div>
        </Alert> }
        </>
    )
}
export default UsersError