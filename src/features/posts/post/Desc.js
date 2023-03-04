import { useState, useMemo } from "react"
import UserName from "../../user/UserName"

const Desc = ({owner_id, desc}) => {
    const [hide, setHide]=useState(true)
   console.log("in Desc")
   
    return useMemo(()=>{
   return (
        <div className="mb-2" style={{textAlign: "left", fontSize: "13.6px"}}>
            
            <UserName user_id={owner_id} />
            {hide? 
                
                <span className="two-rows-box" >
                    <div style={{display: "inline"}}>{desc.slice(0,100)}</div>

                    {desc.length>110 && 
                    <>
                    &nbsp;...&nbsp;
                        <div style={{display: "inline", cursor: "pointer", color: "gray" }} onClick={()=>setHide(false)} > more</div>
                     </>
                    }
                </span>
                :
                <>
                    <span >{desc} &nbsp;</span>
                    <div style={{display: "inline", color: "gray" }} onClick={()=>setHide(true)} >hide</div>
                </>
            }

        </div>
   )
        },[hide, desc, owner_id])
}
export default Desc