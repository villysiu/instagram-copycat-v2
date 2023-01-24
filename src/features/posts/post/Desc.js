import { Card } from "react-bootstrap"

// import { Card } from "react-bootstrap"
const Desc = ({owner, desc}) => {
   
   return (
        <Card.Text>
            <b>{owner}</b> {desc} 
        </Card.Text>
   )
}
export default Desc