import { useDispatch } from 'react-redux'

const url="http://localhost:3000"
export const addPost=async (formData)=>{
    const dispatch = useDispatch()
    try {
        const response=await fetch(`${url}/photos`, {
            method: "POST",
            headers: {
                "Authorization": localStorage.getItem("token")
            },
            body: formData
        })
        const data=await response.json()
        if(!response.ok) throw data.error
        dispatch(addPhoto(data))
    } catch (error) {
        console.log(error)
    }
}