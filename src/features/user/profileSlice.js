import { defer } from "react-router-dom";
const url="http://localhost:3000"

export const func=async ({params}) => {
    const id=params.id

    console.log(params.userId)
    console.log(typeof(params.userId))
    try {
        const response=await fetch(`http://localhost:3000/users/${Number(params.userId)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                
            }
        })
        const data=await response.json()
        if(!response.ok) 
            throw new Error(response.statusText)
        console.log("succeed fetching user")
        console.log(data)
        return defer({ data });

    } 
    catch(error){
        return Promise.reject(error.message ? error.message : "no data")
    }
}
    
