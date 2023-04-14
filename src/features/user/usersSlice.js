import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { editProfile, editAvatar, deleteAvatar, signupUser } from "./userSlice";

const url="http://localhost:3000"

export const fetchUsers=createAsyncThunk(

    'users/fetchUsers',
    async () => {
        try {
            const response=await fetch(`${url}/users/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data=await response.json()
            if(!response.ok) {
                throw new Error(response.statusText)
            }
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
        error: null,
        users: [],
        status: 'idle',
        currentUser: null,
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
            state.status = 'loading'
            
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
           
            state.status = 'succeeded'
            state.users = action.payload.data
            state.error = null
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = "Failed to fetch users. Please check if Rails API is setup locally."
        })
        
        .addCase(editProfile.fulfilled, (state, action) => {
            // state.usersStatus = 'succeeded'
            const user=state.users.find(u => action.payload.id === u.id)
            user.name=action.payload.name
            user.bio=action.payload.bio
        })
        .addCase(editAvatar.fulfilled, (state, action) => {
            const user=state.users.find(u => u.id === action.payload.data.id)
            user.avatar=action.payload.data.avatar
            
        })
        .addCase(deleteAvatar.fulfilled, (state, action) => {
            const user=state.users.find(u => u.id === action.payload.data)
            user.avatar=null
            
        })
        .addCase(signupUser.fulfilled, (state, action) => {
            state.users=[...state.users, action.payload.data]
        })
    }})
    export default usersSlice.reducer
    export const { addUser, updateProfile } = usersSlice.actions;

    export const selectUsers = (state) => state.users.users
    export const selectUserbyId = (state, userId) => {
        return state.users.users.find(u => u.id === userId) || null
    }
    
    
   