import Button from 'react-bootstrap/Button';
const Logout = () =>{
    const handleClick=()=>{
        console.log("logging out")
    }
    return (
        <Button variant="primary" onClick={handleClick} type="logout" >
        Logout
      </Button>
    )
}