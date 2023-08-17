import { InfoCircle } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Info = () => {
    return (

        <Link to={"/about"} >
            <InfoCircle className="circle_button"  />
        </Link>
    )
}
export default Info