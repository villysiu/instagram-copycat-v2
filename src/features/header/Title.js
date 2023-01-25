import { Navbar } from "react-bootstrap"
const Title = ({showProfileCB}) => {
    return (
        <Navbar.Brand className="transparent_button" as="button" onClick={()=>showProfileCB(false)}>
            <h2>Instagram Copycat</h2>
        </Navbar.Brand>
    )
}
export default Title