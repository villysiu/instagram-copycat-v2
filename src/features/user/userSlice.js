import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url="http://localhost:3000"

export const fetchCurrentUserId=createAsyncThunk(
    'user/fetchCurrentUserId',
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
            
            if(!response.ok) 
                throw new Error(response.statusText)
            if(data)
                timeoutUser(Date.now())
            
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
            localStorage.setItem("expired", Date.now()+(1000*60*30))
            timeoutUser(Date.now());
            return{
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
            localStorage.setItem("expired", Date.now()+(1000*60*30))
            timeoutUser(Date.now());
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
        console.log("looooooggging out")
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
        // console.log("getting all users")
        try {
            const response=await fetch(`http://localhost:3000/users/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    
                }
            })
            const data=await response.json()
            if(!response.ok) 
                throw new Error(response.statusText)
            // console.log("succeed fetching all users")
            // console.log(data)
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
        currentUserId: null,
        status: 'idle',
        error: null,

        users: [],
        usersStatus: 'idle',
        
    },
    reducers: {
  
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserId.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchCurrentUserId.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            state.currentUserId = action.payload.data
            state.error = null
            
           
        })
        .addCase(fetchCurrentUserId.rejected, (state, action) => {
            console.log(action)
            // localStorage.clear()

            state.status = 'failed'
            state.error = action.error.message
           
        })
        .addCase(loginUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action)
            
            state.status = 'succeeded'
            state.currentUserId = action.payload.data
            state.error = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(signupUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            console.log(action)
            
            state.status = 'succeeded'
            state.currentUserId = action.payload.data.id
            state.error = null
            state.users.push(action.payload.data)

        })
        .addCase(signupUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            state.currentUserId = null
            localStorage.clear();
            // console.log(state.posts)
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(editProfile.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(editProfile.fulfilled, (state, action) => {

            state.status = 'succeeded'
            const user=state.users.find(u => action.payload.id === u.id)
            user.name=action.payload.name
            user.bio=action.payload.bio
            
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
            // const u=action.payload.data
            state.status = 'succeeded'
            const user=state.users.find(u => u.id === action.payload.data.id)
            user.avatar=action.payload.data.avatar
            
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
            const user=state.users.find(u => u.id === action.payload.data)
            user.avatar=null
            
        })
        .addCase(deleteAvatar.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

        .addCase(fetchUsers.pending, (state, action) => {
            state.usersStatus = 'loading'
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action)
            state.usersStatus = 'succeeded'
            state.users = action.payload.data
            state.error = null
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.usersStatus = 'failed'
            state.error = action.error.message
        })
   
    }
})
export default userSlice.reducer

// export const fetchAllUsers = (state) =>{
//     console.log(state)
//      return state.users.users
// }
export const currentUser = (state) =>{
    // console.log(state)
    return state.user.users.find(u=> u.id === state.user.currentUserId)
}
export const selectUserbyId = (state, userId) => {
    console.log(state)
    return state.user.users.find(u => u.id === userId)
}
export const timeoutUser = (now) => {
    console.log("in timeoutUser")
    const exp=localStorage.getItem("expired")
    const due = exp-now

    const s=setTimeout(()=>{
        console.log("kick user out")
        localStorage.clear()
        window.location.reload();
        }, due )

    return ()=>clearTimeout(s)
}