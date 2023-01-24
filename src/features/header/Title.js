import { Navbar } from "react-bootstrap"
const Title = ({handleClick}) => {
    return (
        <Navbar.Brand className="transparent_button" as="button" onClick={handleClick}>
            <h2>Instagram Copycat</h2>
        </Navbar.Brand>
    )
}
export default Title