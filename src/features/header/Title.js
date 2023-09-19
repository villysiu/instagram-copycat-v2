import { Link } from "react-router-dom"
import { Instagram } from "react-bootstrap-icons"
const Title = () => {
    return (
        <div className="title_wrapper">
            <Link to={"/"} className="link_black ">
                <Instagram className="circle_button" />
            </Link>
            <Link to={"/"} className="link_black title ms-2 ">
                Villy's Instagram
            </Link>
        </div>
        
    )
}
export default Title