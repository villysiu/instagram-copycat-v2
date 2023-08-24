import { InfoCircle } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Info = () => {
    return (


        <div  className="post_header_l ">
            <Link to={"/about"}>
                <InfoCircle className="circle_button"  />
            </Link>
            <div className='d-none d-lg-block'>
                <Link to={"/"} className="link_black " >        
                        About
                </Link>
            </div>
        </div>
    )
}
export default Info