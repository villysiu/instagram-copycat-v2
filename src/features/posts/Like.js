import { Heart, HeartFill } from 'react-bootstrap-icons'

const Like = ({redHeart, toggleHeartCB}) => {
    const handleClick=e=>{
        toggleHeartCB()
    }
    return (
        redHeart ? 
        <HeartFill onClick={handleClick} /> :
        <Heart onClick={handleClick} />
    )
}
export default Like