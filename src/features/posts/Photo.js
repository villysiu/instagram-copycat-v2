const Photo = ({url}) =>{
    return(
        <Card.Img style={{size: 'cover'}} variant="top" src={'http://localhost:3000'+url} />
    )

}