import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { unfollow } from "../usersSlice"
import { Dropdown } from "react-bootstrap"
import { ChevronDown } from "react-bootstrap-icons"
const UnfollowButton = ({userId}) => {
    
    const dispatch = useDispatch()
    const handleClick = () =>{
        dispatch(unfollow({user_id: userId}))
    }
    return (
        <Dropdown>
            <Dropdown.Toggle bsPrefix="remove_follower_btn" id="toggle">
                Following <ChevronDown className="ms-2"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleClick} style={{color: 'red'}}>
                    <b>Unfollow</b>
                </Dropdown.Item>
                <Dropdown.Divider />
            
                <Dropdown.Item>
                <b>Cancel</b>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
export default UnfollowButton