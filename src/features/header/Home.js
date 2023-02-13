import { House } from "react-bootstrap-icons"
const Home = ({showProfileCB}) => {
    return (
        <House className="circle_button" onClick={()=>showProfileCB(false)} />
    )
}
export default Home