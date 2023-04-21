import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { backendAPI } from "../../app/data";


export const fetchCurrentUserId=createAsyncThunk(
    'user/fetchCurrentUserId',
    async () => {
        try {
            const response=await fetch(`${backendAPI}/current_user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token"),
                }
            })
            const data=await response.json()
            
            if(!response.ok) {
                throw new Error(response.status+" "+response.statusText)
            }
                
            return {
                data,
            }
        } 
        catch(error){
            
            return Promise.reject("No user logged in");
        }
    }
)
export const loginUser=createAsyncThunk(
    'user/userLogin',
    async (userInfo) =>{
        try {
            const response=await fetch(`${backendAPI}/login`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            
            if(!response.ok) 
                throw new Error(response.status+" "+response.statusText)
            
            const data=await response.json()

            localStorage.setItem('token', response.headers.get("Authorization"))
            
            return{
                data
            }
        } 
        catch(error){
   
            return Promise.reject(error.message)
        }
    }

)
export const signupUser=createAsyncThunk(
    'user/signupUser',
    async (userInfo) => {
        try{
            const response=await fetch(`${backendAPI}/signup`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            const data=await response.json()
            console.log(response)
            console.log(data)
            if(!response.ok) {
                console.log(response)
                throw new Error(response.status+" "+response.statusText)
           }
            localStorage.setItem('token', response.headers.get("Authorization"))
            return {
                data
            }
        } catch(error){
            return Promise.reject(error.message)
        }
    }

    
)
export const logoutUser=createAsyncThunk(
    'user/logoutUser',
    async () => {

        try{
            const response=await fetch(`${backendAPI}/logout`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': localStorage.getItem('token')
                }
            })
            if(!response.ok) 
                throw new Error(response.status+" "+response.statusText)
            
            return null
                
            
        } catch(error){
            return Promise.reject(error.message)
        }
    }
)
export const editProfile = createAsyncThunk(
    'user/editProfile',
    async({formData})=>{
    
      try{
        const response=await fetch(`${backendAPI}/edit_user`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()
        
        if(!response.ok) 
          throw new Error(response.status+" "+response.statusText)
        
        return {
            id: data,
            name: formData.get("name"),
            bio: formData.get("bio"),
        }
      } catch (error) {
          return Promise.reject(error.message)
      }
    }
)
export const editAvatar = createAsyncThunk(
    'user/editAvatar',
    async({formData})=>{

      try{
        const response=await fetch(`${backendAPI}/avatar`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()
        
        if(!response.ok) 
          throw new Error(response.status+" "+response.statusText)
        
        return {
            data
        }
      } catch (error) {
          return Promise.reject(error.message)
      }
    }
)
export const deleteAvatar = createAsyncThunk(
    'user/deleteAvatar',
    async()=>{
      try{
        const response=await fetch(`${backendAPI}/avatar`, {
            method:'delete',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
        const data=await response.json()

        if(!response.ok) 
          throw new Error(response.status+" "+response.statusText)
        
        return {
            data
        }
      } catch (error) {
          return Promise.reject(error.message)
      }
    }
)


const userSlice=createSlice({
    name: 'user',
    initialState: {
        currentUserId: null,
        status: 'idle',
        error: null,    
    },
    reducers: {
        logout: (state) => {
            console.log("in dispatch logging out")
            state.currentUserId = null
            localStorage.clear()
          },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserId.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchCurrentUserId.fulfilled, (state, action) => {
            
            state.status = 'succeeded'
            state.currentUserId = action.payload.data
        })
        .addCase(fetchCurrentUserId.rejected, (state, action) => {
            
            localStorage.clear()
            state.status = 'failed'
            // state.error=action.payload
           
        })
        .addCase(loginUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.currentUserId = action.payload.data
            state.error = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = "Failed to login. Please check if email and password are correct."
        })
        .addCase(signupUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(signupUser.fulfilled, (state, action) => {
           
            state.status = 'succeeded'
            state.currentUserId = action.payload.data.id
            state.error = null
            

        })
        
        .addCase(signupUser.rejected, (state, action) => {

            state.status = 'failed'
            console.log(action)
            state.error = "Email already existed"
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
           
            state.status = 'succeeded'
            state.currentUserId = null
            localStorage.clear();

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
        })

        .addCase(editProfile.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(editAvatar.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(editAvatar.fulfilled, (state, action) => {
            state.status = 'succeeded'
        })
        .addCase(editAvatar.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        .addCase(deleteAvatar.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(deleteAvatar.fulfilled, (state, action) => {
            state.status = 'succeeded'    
        })
        .addCase(deleteAvatar.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })

   
    }
})
export const { logout } = userSlice.actions
export default userSlice.reducer

export const currentUserId = state => {
    return state.user.currentUserId
}

