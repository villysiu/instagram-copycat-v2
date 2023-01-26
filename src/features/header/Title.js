import { Navbar } from "react-bootstrap"
const Title = ({showProfileCB}) => {
    return (
        <Navbar.Brand className="transparent_button" as="button" onClick={()=>showProfileCB(false)}>
            <h3>Instagram Copycat</h3>
        </Navbar.Brand>
    )
}
export default Title