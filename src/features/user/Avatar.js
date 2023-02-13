import { Nav, Image } from "react-bootstrap"
const Avatar=({avatar, name})=>{
    return(
        <>
                {avatar ?
                    <Nav.Item >
                        <Image className="round_avator thumbsize" src={`http://localhost:3000/${avatar}`} /> 
                    </Nav.Item>
                :
                    <Nav.Item className="round_avator empty_avator thumbsize">
                        {name[0]}
                    </Nav.Item>
        
                }
                
                </>
    )
}
export default Avatar