import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserbyId } from "./user/userSlice";
const Test = () => {
    
    console.log("in test")
    const { num } = useParams();
    const data=useSelector(state=>selectUserbyId(state, Number(num)))
    console.log(data)
    return (
        <h1>WHEHEHEHEHEHEH {num}</h1>
    )
  
}
export default Test