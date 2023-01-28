const ChangeAvator = ({showModal}) =>{
    const fileRef = useRef(null);
    const [preview, setPreview]=useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData=new FormData()
        formData.append("avator", preview)
        
        dispatch(changeAvator({formData: formData}))
        e.target.reset()
    }

    const handlePreview=(e)=>{
        e.preventDefault();
        if(e.target.files.length===0) 
            return;
        setPreview(e.target.files[0])
    }
    
    const handleRemove=()=>{
        setPreview(null)
        fileRef.current.value = null;
    }
    return (
        <h4>Chanr</h4>
    )
}
export default ChangeAvator