import { House } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Home = () => {
    return (

        <Link to={"/instagram-copycat-v2"} >
            <House className="circle_button"  />
        </Link>
    )
}
export default Home