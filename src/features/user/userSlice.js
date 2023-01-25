import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url="http://localhost:3000"

export const fetchUser=createAsyncThunk(
    'user/fetchUser',
    async () => {
        try {
            const response=await fetch("http://localhost:3000/private/test", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token"),
                }
            })
            const data=await response.json()
            if(!response.ok) 
                throw new Error(response.statusText)
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
            if(!response.ok) throw new Error(response.statusText)
            
            localStorage.clear()
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
        const response=await fetch(`${url}/private/update`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()

        if(!response.ok) 
          throw new Error(response.statusText)
        console.log(data)
        return {
            data
        }
      } catch (error) {
          return Promise.reject(error.message ? error.message : "no data")
      }
    }
)
    
const userSlice=createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null
    },
    reducers: {
  
    },
    extraReducers(builder) {
      builder
        .addCase(fetchUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            state.user = action.payload.data
            state.error = null
           
        })
        .addCase(fetchUser.rejected, (state, action) => {
            console.log("No current user login")
            state.status = 'succeeded'
            state.user = null
            state.error = null
            // state.status = 'failed'
            // state.error = action.error.message
        })
        .addCase(loginUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            state.user = action.payload.data
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
            state.user = action.payload.data
            state.error = null
            
            // console.log(state.posts)
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
            state.user = null
            
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
            console.log(action)
            console.log(state.user)
            state.status = 'succeeded'
            
            state.user = action.payload.data
            
        })
        .addCase(editProfile.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})
export default userSlice.reducer
export const currentUser = (state) =>{
     return state.user ? state.user.user : null
   
}
export const getUserNameById = (state, id) =>{
    console.log(state)
    return "silly goose"
} 