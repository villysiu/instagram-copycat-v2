import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { backendAPI } from '../../app/helper'
import { editAvatar, deleteAvatar, editProfile } from '../user/usersSlice'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await fetch(`${backendAPI}/photos.json`)
      const data=await response.json()

      if(!response.ok) 
        throw new Error(response.statusText)

      return {
        data,
       }
    } catch(error){
      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)
export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (formData)=>{
    console.log(formData)
    try {
      const response=await fetch(`${backendAPI}/photos`, {
          method: 'POST',
          headers: {
            // "Content-Type": "application/json",
            // 'Accept' : 'application/json',
              "Authorization": localStorage.getItem("token")
          },
          body: formData
      })
      console.log(response)
      const data=await response.json()
      console.log(data)
      if(!response.ok) {
        throw new Error(response.status+" "+response.statusText)
      }
     return {
      data,
     }
    }catch(error){

      console.log(error.json())
      return Promise.reject(error)
    }
  }
)
export const editAPost = createAsyncThunk(
    'posts/editAPost',
    async(postData)=>{
      const { postId, formData } = postData
      try{
        const response=await fetch(`${backendAPI}/photos/${postId}`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        // const data=await response.json()

        if(!response.ok) {
          throw new Error(response.status+" "+response.statusText)
        }  
        return {
          postId,
          desc: formData.get("desc"),
        }
      } catch (error) {
        
        return Promise.reject(error)
      }
    }
)
export const deleteAPost = createAsyncThunk(
  'posts/deleteAPost',
  async(postId)=>{
    try {
      const response=await fetch(`${backendAPI}/photos/${postId}`, {
        method: 'delete',
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        },
    })
    // const data=await response.json()
    if(!response.ok) 
      throw new Error(response.status+" "+response.statusText)
    return {
      postId
    }
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
export const likeAPost = createAsyncThunk(
  'posts/likeAPost',
  async ({comment_id, post_id})=>{
    console.log("like a comment "+ comment_id + " "+ post_id)
    try {

      // const response=await fetch(`${backendAPI}/photos/${post_id}/likes`, {
        const response=await fetch(`${backendAPI}/comments/${comment_id}/likes`, {
        method: 'POST',
        headers: {
          'Content-type': "application/json",
          'Accept' : 'application/json',
          "Authorization": localStorage.getItem("token")
        },
      })
      const data=await response.json()
      
      if(!response.ok) 
        throw new Error(response.status+" "+response.statusText)
      return {
        comment_id: comment_id,
        post_id: post_id,
        ...data
      }
    } 
    catch (error) {
      return Promise.reject(error)
    }
  }
)
export const unlikeAPost = createAsyncThunk(
  'posts/unlikeAPost',
  async ({post_id, comment_id}) =>{
    try {
        const response=await fetch(`${backendAPI}/comments/${comment_id}/likes`, {
        method: "delete",
        headers: {
            'Content-type': "application/json",
            'Authorization': localStorage.getItem('token'),
        },
      })
      const data=await response.json()
      if(!response.ok) 
        throw new Error(response.status+" "+response.statusText)
    
      
      return {
        post_id,
        comment_id,
        ...data
      }

    } catch (error) {
      return Promise.reject(error)
    }
  }
)
export const addComment = createAsyncThunk(
  'posts/addComment',
  async ({postId, formData})=>{
    console.log("comment a post "+ postId)
    console.log(formData.get("comment"),)
    try {
      
      const response=await fetch(`${backendAPI}/photos/${postId}/comments`, {
        method: 'POST',
        headers: {
          // 'Content-type': "application/json",
          // 'Accept' : 'application/json',
          "Authorization": localStorage.getItem("token")
        },
        body: formData
      })
      const data=await response.json()
      console.log(response)
      console.log(data)
      if(!response.ok) 
        throw new Error(response.status+" "+response.statusText)
      return {
        postId: postId,
        data,
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
       
        state.status = 'succeeded'
        state.posts = action.payload.data
       
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        // console.log(action.error.message)
        state.error = "Failed to fetch posts. Please check if Rails API is setup locally. "
      })

      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log('add new POST')
        state.status = 'succeeded'
        
        // state.posts.unshift(action.payload.data)
        state.posts = [action.payload.data, ...state.posts]
      })
      .addCase(addNewPost.rejected, (state, action) => {

        state.status = 'failed'
        state.error = "Adding new post failed. Please try again later"
      })
      .addCase(editAPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(editAPost.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const {postId, desc} = action.payload
        const post=state.posts.find(post=>post.id===postId)
        post.desc.comment=desc
      })
      .addCase(editAPost.rejected, (state) => {
        
        state.status = 'failed'
        state.error = `Editing post failed. Please try again later`
     
      })
      .addCase(deleteAPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteAPost.fulfilled, (state, action) => {
        
        state.status = 'succeeded'
        state.posts=state.posts.filter(post=>post.id!==action.payload.postId)
      })
      .addCase(deleteAPost.rejected, (state) => {
        state.status = 'failed'
        state.error = `Deleting post failed. Please try again later`
      })
      .addCase(likeAPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(likeAPost.fulfilled, (state, action)=>{
        console.log(action.payload)
        
          state.status = 'succeeded'
          // state.posts = state.posts.map(post=>{
          //   return (
          //     post.id===action.payload.post_id 
          //     ? 
               
          //       post.desc.id === action.payload.comment_id ?
          //           [...post, [...post.desc.likes, action.payload.user]]
          //           :
          //           post.comments.map(comment=>{
          //             return (
          //               comment.id === action.payload.comment_id ? 
          //                 [...post, [...post.comment, [...comment.likes, action.payload.user]]]
          //                 :
          //                 comment
          //             )
          //           })
                  
                
          //     :
          //     post
          //   )
          // })
        
        
        const post=state.posts.find(post=>post.id===action.payload.post_id)
        const comment = post.desc.id === action.payload.comment_id ? 
              post.desc : 
              post.comments.find(comment=>comment.id === action.payload.comment_id)
        comment.likes.push(action.payload.user)


      })
      .addCase(likeAPost.rejected, (state) => {
        state.status = 'failed'
        state.error = `Like a post failed. Please try again later`
      })

      .addCase(unlikeAPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(unlikeAPost.fulfilled, (state, action)=>{
        state.status = 'succeeded'
        console.log(action.payload)
        
        const post=state.posts.find(post=>post.id===action.payload.post_id)
        const currUserId = action.payload.user_id

        const comment = post.desc.id === action.payload.comment_id ? 
              post.desc : 
              post.comments.find(comment=>comment.id === action.payload.comment_id)
        comment.likes=comment.likes.filter(like=>like.user_id!==currUserId)
      })
      .addCase(unlikeAPost.rejected, (state) => {
        state.status = 'failed'
        state.error = `Unlike a post failed. Please try again later`
      })
      .addCase(addComment.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addComment.fulfilled, (state, action)=>{
  
        state.status = 'succeeded'
        const post=state.posts.find(post=>post.id===action.payload.postId)
        post.comments.push(action.payload.data)

      })
      .addCase(addComment.rejected, (state) => {
        state.status = 'failed'
        state.error = `Comment a post failed. Please try again later`
      })
      .addCase(editAvatar.fulfilled, (state, action) => {
        console.log(state.posts)
        console.log(action.payload)

        state.posts.map(post=>{
          if(post.owner.id === action.payload.id){
            post.owner.avatar = action.payload.avatar
            post.desc.user.avatar = action.payload.avatar
          }
          post.comments.map(comment=>{
            if(comment.user.id===action.payload.id)
              comment.user.avatar = action.payload.avatar
          })
        })
      })
      .addCase(deleteAvatar.fulfilled, (state, action) => {
        console.log(state.posts)
        console.log(action.payload)
        state.posts.map(post=>{
          if(post.owner.id === action.payload.id){
            post.owner.avatar = null
            post.desc.user.avatar = null
          }
          post.comments.map(comment=>{
            if(comment.user.id===action.payload.id)
              comment.user.avatar = null
          })
        })
       
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        console.log(state.posts)
        console.log(action.payload)

        state.posts.map(post=>{
          if(post.owner.id === action.payload.id){
            post.owner.name = action.payload.name
            post.desc.user.name = action.payload.name
          }
          post.comments.map(comment=>{
            if(comment.user.id===action.payload.id)
              comment.user.name = action.payload.name
          })
        })
    })
  }
})

// Action creators are generated for each case reducer function
export const { postAdded, postsFetched } = postsSlice.actions

export default postsSlice.reducer
export const selectAllPosts = (state) =>{
  return state.posts.posts
} 
export const selectPostsbyUserId = (state, userId) =>{
  return state.posts.posts.filter(post=>post.owner.id===userId)
} 
export const selectPostbyId = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId)
}

export const getPostByUserCount = (state, userId) => {
  return state.posts.posts.filter(p=>p.owner.id === userId).length
}
export const getDescByCommentId = (state, postId, descId) => {
  const post = state.posts.posts.find(p=>p.id === postId)
  return post.comments.find(c=>c.id === descId)
}

