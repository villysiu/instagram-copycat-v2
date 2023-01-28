import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const url="http://localhost:3000"

export const fetchUsers=createAsyncThunk(

    'users/fetchUsers',
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
const usersSlice=createSlice({
    name: 'users',
    initialState: {
        users: null,
        status: 'idle',
        error: null
    },
    reducers: {
  
    },
    extraReducers(builder) {
      builder
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
export default usersSlice.reducer
export const allUsers = (state) =>{
    console.log(state)
     return state.users.users
}
export const selectUserbyId = (state, userId) => {
    
    return state.users.users.find(user => user.id === userId)
  }
   