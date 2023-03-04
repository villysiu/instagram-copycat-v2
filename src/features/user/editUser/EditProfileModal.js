// for react router use
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectUserbyId } from "../userSlice"
import { Modal } from "react-bootstrap"
import EditProfile from "./EditProfile"
import { useParams } from "react-router-dom"
const Temp=()=>{
    console.log("Hhheheheh")
    const {userId} = useParams()
    const [show, setShow] = useState(true)
    const user=useSelector(state=>selectUserbyId(state, Number(userId)))
    console.log(user)
    return(
        <>
        
        <Modal show={show} onHide={()=>setShow(false)} dialogClassName="modal-dialog-centered">
              <EditProfile setShow={setShow} user={user}/> 
          </Modal>
          </>
    )
}
export default Temp