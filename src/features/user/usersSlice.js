import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import { backendAPI } from "../../app/helper";

const timeOutUser2 = (loginTime, thunkAPI) =>{
    // const loginTime = data.login
    const jwtExpTime=30
    console.log('timeoutuser2')
    const logoutTime = loginTime+60*jwtExpTime
    
    const due = (logoutTime-Math.floor(Date.now()/1000))*1000
    console.log('logout time: ' + logoutTime + ', current: '+ Date.now())
    console.log(due<0)
    const s=setTimeout(()=>{
        thunkAPI.dispatch(logout())    
    }, due )

    return ()=>clearTimeout(s)
}
export const fetchCurrentUserId=createAsyncThunk(
    'users/fetchCurrentUserId',
    async (_, thunkAPI) => {
        try {
            const response=await fetch(`${backendAPI}/current_user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token"),
                }
            })
            const data=await response.json()
            console.log(response)
            if(!response.ok) {
                throw new Error(response.status)
            }
            console.log(data)
            timeOutUser2(data.login, thunkAPI)
            return { data,}
        } 
        catch(error){
            return Promise.reject("No user logged in");
        }
    }
)
export const fetchUserById=createAsyncThunk(

    'users/fetchUserById',
    async (userId) => {
        
        try {
            const response=await fetch(`${backendAPI}/users/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Accept' : 'application/json',
                },
            })
            console.log(`${response.status} ${response.statusText}`)
            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }
            const data=await response.json()
            return { 
                data 
            }
        } 
        catch(error){
            console.log(error)
            return Promise.reject(error)
        }
    }
)
export const loginUser=createAsyncThunk(
    'users/userLogin',
    async (userInfo, thunkAPI ) =>{
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
                throw new Error(response.status)
            
            const data=await response.json()

            localStorage.setItem('token', response.headers.get("Authorization"))
            timeOutUser2(data.login, thunkAPI)
            return{
                data
            }
        } 
        catch(error){
            // console.log(error.message)
            if(error.message==="401")
                return Promise.reject("Failed to login. Please check if email and password are correct.")
            return Promise.reject(error.message)
        }
    }

)
export const verifyEmail=createAsyncThunk(
    'users/verifyEmail',
    async (user) => {
        console.log('check email slice')
        console.log(user)
        
        try{
            const response=await fetch(`${backendAPI}/check_email`, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": "application/json"
                },
                body: JSON.stringify(user)
            })
            if(!response.ok) {
                throw new Error(response.status+" "+response.statusText)
            }   
            const data=await response.json()
            console.log(data)
            

            return {
                ...data
            }
        } catch(error){
            return Promise.reject(error.message)
        }
    }
)
export const signupUser=createAsyncThunk(
    'users/signupUser',
    async (formData, thunkAPI) => {
        try{
            const response=await fetch(`${backendAPI}/signup`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify({user: formData[0]})
            })
            
            if(!response.ok) {
                throw new Error(response.status+" "+response.statusText)
            }
            localStorage.setItem('token', response.headers.get("Authorization"))
            const data=await response.json()
            
            thunkAPI.dispatch(editAvatar(formData[1]))
            timeOutUser2(data.login, thunkAPI)
            return {
                data
            }
        } catch(error){
            return Promise.reject(error.message)
        }
    }

    
)
export const logoutUser=createAsyncThunk(
    'users/logoutUser',
    async () => {

        try{
            const response=await fetch(`${backendAPI}/logout`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': localStorage.getItem('token')
                }
            })
            console.log(response)

            if(!response.ok) 
                throw new Error(response.status+" "+response.statusText)
            const data=await response.json()
            console.log( data)
            localStorage.clear()
            return null
                
            
        } catch(error){
            return Promise.reject(error.message)
        }
    }
)
export const editProfile = createAsyncThunk(
    'users/editProfile',
    async(ooo)=>{
    
      try{
        const response=await fetch(`${backendAPI}/edit_user`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
                "content-type": 'application/json',
                "accept": "application/json"
            },

            body: JSON.stringify(ooo)
        })
        const data=await response.json()
        if(!response.ok) 
          throw new Error(response.status+" "+response.statusText)
        
        return {
            ...data
        }
      } catch (error) {
          return Promise.reject(error.message)
      }
    }
)
export const editAvatar = createAsyncThunk(
    'users/editAvatar',
    async(formData)=>{
   
        console.log(formData)
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
        console.log(data)
        return {
            ...data
        }
      } catch (error) {
          return Promise.reject(error.message)
      }
    }
)
export const deleteAvatar = createAsyncThunk(
    'users/deleteAvatar',
    async()=>{
      try{
        const response=await fetch(`${backendAPI}/avatar`, {
            method:'delete',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
        const data=await response.json()
        console.log(data)
        if(!response.ok) 
          throw new Error(response.status+" "+response.statusText)
        
        return {
            ...data
        }
      } catch (error) {
          return Promise.reject(error.message)
      }
    }
)


const usersSlice=createSlice({
    name: 'users',
    initialState: {
        currUser: {
            currUser: null,
            // id: null,
            // login: 0,
            // avatar: null,
            status: 'idle',
            error: null,    
        },
        user: {
            error: null,
            user: null,
            status: 'idle',
        },
        email: {
            error: null,
            existed: 0,
            status: 'idle',
        }
        
    },
    reducers: {
        logout: (state) => {
            console.log("in dispatch logging out")
            // state.currUser.id = null
            // state.currUser.login = 0
            // state.currUser.avatar = null
            state.currUser.currUser = null
            state.currUser.status = 'idle'
            state.currUser.error = null   
          },
        clearUserError: (state)=>state.user.error = null,
        clearCurrUserError: (state)=>state.currUser.error = null,
        clearEmailError: (state)=>state.email.error = null,
            
        
    },
    extraReducers(builder) {
      builder
        .addCase(fetchCurrentUserId.pending, (state, action) => {
            state.currUser.status = 'loading'
        })
        .addCase(fetchCurrentUserId.fulfilled, (state, action) => {
            state.currUser.status = 'succeeded'
            // state.currUser.id = action.payload.id
            // state.currUser.login = action.payload.login
            // state.currUser.avatar = action.payload.avatar
            state.currUser.currUser = action.payload.data
        })
        .addCase(fetchCurrentUserId.rejected, (state, action) => {
            // DO NOTHING WHEN NO USER LOGGED IN
            state.currUser.status = 'failed'
            // state.currUser.error="no user login"
            //
           
        })
        .addCase(fetchUserById.pending, (state, action) => {
            state.status = 'loading'
            
        })
        .addCase(fetchUserById.fulfilled, (state, action) => {
            state.user.status = 'succeeded'
            state.user.user = action.payload.data
            state.user.error = null
        })
        .addCase(fetchUserById.rejected, (state, action) => {
            console.log(action.error.message)
            state.user.status = 'failed'
            state.user.error = action.error.message+" or user not existed"
        })
        .addCase(loginUser.pending, (state, action) => {
            state.currUser.status = 'loading'
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.currUser.status = 'succeeded'
            // state.currUser.id = action.payload.id
            // state.currUser.login = action.payload.login
            // state.currUser.avatar = action.payload.avatar
            state.currUser.currUser = action.payload.data
            state.currUser.error = null
        })
        .addCase(loginUser.rejected, (state, action) => {
            console.log(action)
            state.currUser.status = 'failed'
            state.currUser.error = action.error.message
            // state.error = "Failed to login. Please check if email and password are correct."
        })
        .addCase(verifyEmail.pending, (state, action) => {
            state.email.status = 'loading'
        })
        .addCase(verifyEmail.fulfilled, (state, action) => {
            console.log(action.payload)
            state.email.status = 'idle'
            state.email.existed = action.payload.existed
        })
        .addCase(verifyEmail.rejected, (state, action) => {
            state.email.status = 'failed'
            state.email.existed = 0;
        })
        .addCase(signupUser.pending, (state, action) => {
            state.currUser.status = 'loading'
        })
        .addCase(signupUser.fulfilled, (state, action) => {
           
            state.currUser.status = 'succeeded'
            // state.currUser.id = action.payload.id
            // state.currUser.login = action.payload.login
            // state.currUser.avatar = action.payload.avatar
            state.currUser.currUser = action.payload.data
            state.currUser.error = null
        })
        
        .addCase(signupUser.rejected, (state, action) => {

            state.currUser.status = 'failed'
            console.log(action)
            state.currUser.error = "signup error"
        })
        .addCase(logoutUser.pending, (state, action) => {
            state.currUser.status = 'loading'
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
           
            state.currUser.status = 'succeeded'
            state.currUser.id = null
            state.currUser.login = 0
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.currUser.status = 'failed'
            state.currUser.error = action.error.message
        })
        .addCase(editProfile.pending, (state, action) => {
            state.user.status = 'loading'
        })
        .addCase(editProfile.fulfilled, (state, action) => {
            state.user.status = 'succeeded'
            if(state.user.user.id === action.payload.id){
                state.user.user.name=action.payload.name
                state.user.user.bio=action.payload.bio
            }
        })
        .addCase(editProfile.rejected, (state, action) => {
            state.user.status = 'failed'
            state.user.error = action.error.message
        })
        .addCase(editAvatar.pending, (state, action) => {
            state.user.status = 'loading'
        })
        .addCase(editAvatar.fulfilled, (state, action) => {
            state.user.status = 'succeeded'
            console.log(action.payload)
            if(state.user.user.id === action.payload.id){
                state.user.user.avatar=action.payload.avatar
            }
        })
        .addCase(editAvatar.rejected, (state, action) => {
            state.user.status = 'failed'
            state.user.error = action.error.message
        })
        .addCase(deleteAvatar.pending, (state, action) => {
            state.user.status = 'loading'
        })
        .addCase(deleteAvatar.fulfilled, (state, action) => {
            state.user.status = 'succeeded'   
            if(state.user.user.id === action.payload.id){
                state.user.user.avatar=null
            } 
        })
        .addCase(deleteAvatar.rejected, (state, action) => {
            state.user.status = 'failed'
            state.user.error = action.error.message
        })

   
    }
})
export const { logout, clearCurrUserError, clearUserError, clearEmailError } = usersSlice.actions
export default usersSlice.reducer


