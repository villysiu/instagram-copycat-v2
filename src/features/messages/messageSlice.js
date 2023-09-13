import { createSlice } from '@reduxjs/toolkit'
import { fetchPostsByUserId, fetchPosts, getPostCount, addNewPost, editAPost, deleteAPost, likeAPost, unlikeAPost, addComment } from '../posts/postsSlice'
import { loginUser, signupUser, logoutUser, verifyEmail, editProfile, editAvatar, deleteAvatar } from '../user/usersSlice'

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
      
        status: false,
        type: null,
        content: null,
      
  
    },
    reducers: {
      removeMessage: (state)=>{
        state.status= false
        state.type=null
        state.content=null
      }
    },
    extraReducers(builder) {
      builder
        .addCase(loginUser.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status=true
            state.type="success"
            state.content="Welcome back, "+ action.payload.curr_user.name 
        })
        .addCase(loginUser.rejected, (state, action) => {
            console.log(action)
            state.status=true
            state.type="danger"
            state.content=action.error.message

        })
        .addCase(signupUser.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Welcome, "+ action.payload.curr_user.name 
        })
        .addCase(signupUser.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Signup failed." 
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Good bye."
        })
        .addCase(logoutUser.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Logout failed." 

        })
        
        .addCase(verifyEmail.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Email already existed." 

        })
        .addCase(editProfile.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Profile updated"
        })
        .addCase(editProfile.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Profile update failed"

        })
        .addCase(editAvatar.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Avatar updated"
        })
        .addCase(editAvatar.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Avatar update failed"
        })
        .addCase(deleteAvatar.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Avatar removed."
        })
        .addCase(deleteAvatar.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Avatar removed failed."
        })

        .addCase(fetchPostsByUserId.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Failed to fetch user posts from server. Please try later. "
        })
        .addCase(getPostCount.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Failed to fetch total number of posts from server. Please try later. "
        })
        .addCase(addNewPost.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Failed to add new post. Please try later. "
        })
        .addCase(addNewPost.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="New post successfully added."
        })
        
        .addCase(editAPost.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Post successfully updated."
        })
        .addCase(editAPost.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Failed to update post. Please try later. "
        })
        .addCase(deleteAPost.fulfilled, (state, action) => {
            state.status=true
            state.type="success"
            state.content="Post is deleted."
        })
        .addCase(deleteAPost.rejected, (state, action) => {
            state.status=true
            state.type="danger"
            state.content="Failed to delete post. "
        })
        .addCase(likeAPost.rejected, (state) => {
            state.status=true
            state.type="danger"
            state.content="Something went wrong. Please try again later. "
        })
        .addCase(unlikeAPost.rejected, (state) => {
        state.status=true
        state.type="danger"
        state.content="Something went wrong. Please try again later. "
        })
        .addCase(addComment.rejected, (state) => {
            state.status=true
            state.type="danger"
            state.content="Something went wrong. Please try again later. "
          })
    }
})

// Action creators are generated for each case reducer function
export const { removeMessage } = messagesSlice.actions

export default messagesSlice.reducer
// export const selectAllPosts = (state) =>{
//   return state.posts.posts 
// } 