const url="http://localhost:3000"
export const getUser=async (setUserCB)=>{
    try {
      const response=await fetch("http://localhost:3000/private/test", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        }
      })
      const data=await response.json()
  
      //{ user: {email: 'mickey@disney.com', name: 'mickey'}}

      if(!response.ok) throw data.error
      setUserCB(data.user)
    } catch (error) {
        localStorage.clear()
      console.log("Session expired.")
    }
}
export const login = async (userInfo, setUserCB) =>{
    // console.log(userInfo)
    try {
        const response = await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        console.log(data)
        if(!response.ok) throw data.error
        
        // {id: 1, email: 'mickey@disney.com', name: 'mickey'}

        setUserCB(data)
        localStorage.setItem('token', response.headers.get("Authorization"))
    } catch (error) {
        console.log("Email address not existed or incorrect password. Please try again.")
    }
}
export const logout = async (setUserCB) => {
    try {
        const response=await fetch(`${url}/logout`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': localStorage.getItem('token')
            }
        })
        if(!response.ok) throw Error
        setUserCB(null)
        localStorage.clear()
        
    } catch (error) {
        console.log("logout error")
    }
}

export const signup=async (userInfo, setUserCB)=>{
    
    try{
        const response=await fetch(`${url}/signup`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                "accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        const data=await response.json()
        if(!response.ok) throw data.error

        setUserCB(data)
        localStorage.setItem('token', response.headers.get("Authorization"))
    } catch (error){
        console.log(error)
    }
}
