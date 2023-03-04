import AvatarPreview from "./AvatarPreview"
import { useState } from "react"
import { Form, Nav, Navbar } from "react-bootstrap"

import AvatarDoprdown from "./AvatarDoprdown"


const EditAvatar = ({user}) =>{
    const [preview, setPreview] = useState(user.avatar && `http://localhost:3000/${user.avatar}`)

    return (
        <Form>
            <Form.Group className="mb-3">
                <Navbar className="m-3">
                    <AvatarPreview preview={preview} initial={user.name[0]} />
                    <Nav.Item> {user.name}</Nav.Item>
                    <Nav.Item>
                        <AvatarDoprdown setPreview={setPreview} />
                    </Nav.Item> 
                
                </Navbar>
            </Form.Group>
        </Form>
    )
}
export default EditAvatar