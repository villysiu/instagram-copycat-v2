import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Alert } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { removeMessage } from "./messageSlice"
const Message = () =>{
console.log("in message")
    const message = useSelector((state=>state.messages))
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        if(message.status){
            setShow(true)
            var timer = setInterval(()=>{
                dispatch(removeMessage())
                setShow(false)
    
            }, 5000 )
            return function cleanup() {
                clearInterval(timer)
            }
        }
    }, [message]);
    
if(show){
    
    return (
        <Alert className="message" variant={message.type} onClose={() => setShow(false)} dismissible>
            {message.content}
        </Alert>
    )}
}
export default Message