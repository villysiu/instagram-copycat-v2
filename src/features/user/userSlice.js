import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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


)
export const signupUser=createAsyncThunk(

    
)
export const logoutUser=createAsyncThunk(

    
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
            // console.log(state.posts)
        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})
export default userSlice.reducer
export const currentUser = (state) =>{
    console.log(state)
    // return state.posts.posts
  } 