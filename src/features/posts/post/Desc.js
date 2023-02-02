import { Card } from "react-bootstrap"

// import { Card } from "react-bootstrap"
const Desc = ({owner, desc}) => {
   
   return (
        <Card.Text className="mb-3">
            <b>{owner}</b> {desc} 
        </Card.Text>
   )
}
export default Desc