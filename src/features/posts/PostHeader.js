import { Navbar } from 'react-bootstrap';
import { ThreeDots } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { currentUser } from '../user/userSlice';

export const PostHeader=({owner, showEdit, handleClick})=>{
    const currUser=useSelector(currentUser)
    return (
        <Navbar style={{height: '60px'}}>
            <Navbar.Brand className="transparent_button" as="button" onClick={handleClick}>
                {owner.name}
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
                {currUser && currUser.id===owner.id && 
                    <Navbar.Text className="ms-auto transparent_button" as="button" 
                    onClick={()=>showEdit(true)}
                    >
                        <ThreeDots style = {{transform: 'rotate(90deg)'}}  /> 
                    </Navbar.Text>
                } 
            </Navbar.Collapse>
        </Navbar>
    )
}