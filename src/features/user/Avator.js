// import ChangeAvator from "./ChangeAvator"
import {  useRef } from "react"
import { Button, Form, Image } from "react-bootstrap"
const Avator = ({currUser, preview, setPreview}) =>{
    let fileRef = useRef(null);
    

    const handlePreview=(e)=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return;
        setPreview(e.target.files[0])
    }
    const handleClick=(r)=>{
        console.log("i m clickes")
        fileRef.click()
    }
    return (
        <>

            <Form.Control 
                ref={refParam => fileRef = refParam}
                type="file" hidden={true} name="avator" accept="image/*" onChange={e=>handlePreview(e)}/>

            <table><tbody>
                <tr>
                    <td>
                        {preview ?
                            
                            <Image src={URL.createObjectURL(preview)} alt="avator" className="avator round_avator" />
                            :
                            <div className="round_avator empty_avator">{currUser.name[0] }</div>
                        }
                    </td>
                    <td style={{verticalAlign:"top"}}>
                        <tr><td>
                            {currUser.name }
                        </td></tr>
                        <tr><td>
                            <Button variant="link" onClick={handleClick}>
                                change avator
                            </Button>
                        </td></tr>
                    </td>
                </tr>
            </tbody></table>
        </>
    )
}
export default Avator