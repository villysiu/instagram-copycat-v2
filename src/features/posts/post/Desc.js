import { useState, useMemo } from "react"
import UserName from "../../user/UserName"

const Desc = ({ownerId, desc}) => {
    const [hide, setHide]=useState(true)

   return (
        <div className="mb-2" style={{textAlign: "left", fontSize: "13.6px"}}>
            
            <UserName userId={ownerId} />
            &nbsp;
            {hide? 
                
                <span className="two-rows-box" >
                    <div style={{display: "inline"}}>{desc.slice(0,100)}</div>
                    {
                        desc.length>100 && 
                        <>
                            &nbsp;...&nbsp;
                            <div style={{display: "inline", cursor: "pointer", color: "gray" }} 
                                onClick={()=>setHide(false)} > 
                                more
                            </div>
                        </>
                    }
                </span>
                :
                <>
                    <span >{desc} &nbsp;</span>
                    <div style={{display: "inline", color: "gray" }} 
                        onClick={()=>setHide(true)} >
                            hide
                    </div>
                </>
            }

        </div>
   )
 
}
export default Desc