import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url="http://localhost:3000"


export const fetchCurrentUserId=createAsyncThunk(
    'user/fetchUser',
    async () => {
        try {
            const response=await fetch("http://localhost:3000/current_user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token"),
                }
            })
            const data=await response.json()
            console.log(data)
            console.log(response)
            
            if(!response.ok) 
                throw new Error(response.statusText)
            return {
                data,
            }
        } 
        catch(error){
            return Promise.reject(error);
            // return Promise.reject(error.message ? error.message : "no data")
        }
    }
)
export const loginUser=createAsyncThunk(
    'user/userLogin',
    async (userInfo) =>{
        try {
            const response=await fetch(`${url}/login`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            
            if(!response.ok) 
                throw new Error(response.statusText)
            
            const data=await response.json()
            console.log(data)
            localStorage.setItem('token', response.headers.get("Authorization"))
            return {
                // status: response.status,
                data
            }
        } 
        catch(error){
            return Promise.reject(error.message ? error.message : "no data")
        }
    }

)
export const signupUser=createAsyncThunk(
    'user/signupUser',
    async (userInfo) => {
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
            if(!response.ok) throw new Error(response.statusText)
            localStorage.setItem('token', response.headers.get("Authorization"))

            return {
                // status: response.status,
                data
            }
        } catch(error){
            return Promise.reject(error.message ? error.message : "no data")
        }
    }

    
)
export const logoutUser=createAsyncThunk(
    'user/logoutUser',
    async () => {
        try{
            const response=await fetch(`${url}/logout`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': localStorage.getItem('token')
                }
            })
            if(!response.ok) 
                throw new Error(response.statusText)
            
            
            return {
                
            }
            
        } catch(error){
            return Promise.reject(error.message ? error.message : "no data")
        }
    }
)
export const editProfile = createAsyncThunk(
    'user/editProfile',
    async({formData})=>{
      try{
        const response=await fetch(`${url}/user`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()
        console.log(data)
        if(!response.ok) 
          throw new Error(response.statusText)
        
        return {
            id: data,
            name: formData.get("name"),
            bio: formData.get("bio"),
        }
      } catch (error) {
          return Promise.reject(error.message ? error.message : "no data")
      }
    }
)
export const editAvatar = createAsyncThunk(
    'user/editAvatar',
    async({formData})=>{
      try{
        const response=await fetch(`${url}/avatar`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()
        console.log(data)
        if(!response.ok) 
          throw new Error(response.statusText)
        
        return {
            data
        }
      } catch (error) {
          return Promise.reject(error.message ? error.message : "no data")
      }
    }
)
export const deleteAvatar = createAsyncThunk(
    'user/deleteAvatar',
    async()=>{
        console.log("are u here in remove??")
      try{
        const response=await fetch(`${url}/avatar`, {
            method:'delete',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
        const data=await response.json()
        console.log(data)
        if(!response.ok) 
          throw new Error(response.statusText)
        
        return {
            data
        }
      } catch (error) {
          return Promise.reject(error.message ? error.message : "no data")
      }
    }
)
export const fetchUsers=createAsyncThunk(

    'user/fetchUsers',
    async () => {
        console.log("getting users")
        try {
            const response=await fetch("http://localhost:3000/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": localStorage.getItem("token"),
                }
            })
            const data=await response.json()
            if(!response.ok) 
                throw new Error(response.statusText)
            console.log("succeed fetching all users")
            console.log(data)
            return {
                // status: response.status,
                data,
            }
        } 
        catch(error){
            return Promise.reject(error.message ? error.message : "no data")
        }
    }
)
    
const userSlice=createSlice({
    name: 'user',
    initialState: {
        users: null,
        status: 'idle',
        error: null,

        currentUserId: null,
        cstatus: 'idle',
        
    },
    reducers: {
  
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserId.pending, (state, action) => {
            state.cstatus = 'loading'
        })
        .addCase(fetchCurrentUserId.fulfilled, (state, action) => {
            console.log(action)
            state.cstatus = 'succeeded'
            state.currentUserId = action.payload.data
            state.error = null
           
        })
        .addCase(fetchCurrentUserId.rejected, (state, action) => {
            console.log(action)
            localStorage.clear()

            state.status = 'failed'
            state.error = action.error.message
           
        })
        .addCase(loginUser.pending, (state, action) => {
            state.cstatus = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action)
            
            state.cstatus = 'succeeded'
            state.currentUserId = action.payload.data
            state.error = null
            const expiry = Date.now()+60*1000
            localStorage.setItem("expiry", expiry)

        })
        .addCase(loginUser.rejected, (state, action) => {
            state.cstatus = 'failed'
            state.error = action.error.message
        })
        .addCase(signupUser.pending, (state, action) => {
            state.cstatus = 'loading'
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            console.log(action)
            state.cstatus = 'succeeded'
            state.currentUserId = action.payload.data.id
            state.error = null
            state.users.push(action.payload.data)

            const expiry = Date.now()+60*1000
            localStorage.setItem("expiry", expiry)
            
            // console.log(state.posts)
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.cstatus = 'failed'
            state.error = action.error.message
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.cstatus = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            console.log(action)
            state.cstatus = 'succeeded'
            state.currentUserId = null
            localStorage.clear();
            // console.log(state.posts)
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.cstatus = 'failed'
            state.error = action.error.message
        })
        .addCase(editProfile.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(editProfile.fulfilled, (state, action) => {
           
            const u=action.payload
            state.status = 'succeeded'
            // const currUser=state.users.find(user => user.id===state.currentUserId)
            const currUser=state.users.find(user => user.id === u.id)
            currUser.name=u.name
            currUser.bio=u.bio
        })
        .addCase(editProfile.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(editAvatar.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(editAvatar.fulfilled, (state, action) => {
            console.log(action)
            const u=action.payload.data
            state.status = 'succeeded'
            const currUser=state.users.find(user => user.id === u.id)
            currUser.avatar=u.avatar
            
        })
        .addCase(editAvatar.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(deleteAvatar.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(deleteAvatar.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            const currUser=state.users.find(user => user.id === action.payload.data)
            currUser.avatar=null
            
        })
        .addCase(deleteAvatar.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            state.users = action.payload.data
            state.error = null
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
   
    }
})
export default userSlice.reducer
export const fetchAllUsers = (state) =>{
    console.log(state)
     return state.users.users
}
export const currentUser = (state) =>{
    console.log(state)
    const expiry = localStorage.getItem("expiry")
    const now = Date.now()
    console.log(expiry>now)
    if(state.user.currentUserId && expiry>now)
      return state.user.users.find(user=>user.id===state.user.currentUserId) 
    else{
        localStorage.clear()
        return null
    }
     
    
   
}
export const selectUserbyId = (state, userId) => {
    // console.log(state)
    return state.user.users.find(user => user.id === userId)
  }
