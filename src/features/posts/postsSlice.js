import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const url="http://localhost:3000"

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await fetch('http://localhost:3000/photos.json')
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
    try {
      const response=await fetch(`${url}/photos`, {
          method: 'POST',
          headers: {
            // "Content-Type": "application/json",
            // 'Accept' : 'application/json',
              "Authorization": localStorage.getItem("token")
          },
          body: formData
      })
      const data=await response.json()
    
      if(!response.ok) {
        throw new Error(response.status+" "+response.statusText)
      }
     return {
      data,
     }
    }catch(error){
      
      return Promise.reject(error)
    }
  }
)
export const editAPost = createAsyncThunk(
    'posts/editAPost',
    async(postData)=>{
      const { postId, formData } = postData
      try{
        const response=await fetch(`${url}/photos/${postId}`, {
            method:'PATCH',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
            body: formData
        })
        const data=await response.json()

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
      const response=await fetch(`${url}/photos/${postId}`, {
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
  async (post_id)=>{
    console.log("like a post "+ post_id)
    try {

      const response=await fetch(`${url}/photos/${post_id}/likes`, {
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
        post_id,
        data
        
      }
    } catch (error) {
      return Promise.reject(error)
    }
  }
)
export const unlikeAPost = createAsyncThunk(
  'posts/unlikeAPost',
  async ({post_id}) =>{
    try {
        const response=await fetch(`${url}/photos/${post_id}/likes`, {
        method: "delete",
        headers: {
            'Content-type': "application/json",
            'Authorization': localStorage.getItem('token'),
        },
      })
      const data=await response.json()
      if(!response.ok) 
        throw new Error(response.status+" "+response.statusText)
    
      console.log(data)
      return {
        post_id: post_id,
        like_id: data,
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
      
      const response=await fetch(`${url}/photos/${postId}/comments`, {
        method: 'POST',
        headers: {
          // 'Content-type': "application/json",
          // 'Accept' : 'application/json',
          "Authorization": localStorage.getItem("token")
        },
        body: formData
      })
      const data=await response.json()
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
        // state.posts = state.posts.concat(action.payload.data)
        state.posts = action.payload.data
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        // console.log(action.error.message)
        state.error = "Failed to fetch posts. Please check if Rails API is setup locally. "
      })

      .addCase(addNewPost.fulfilled, (state, action) => {

        state.status = 'succeeded'
        // state.posts.push(action.payload.data)
        state.posts.unshift(action.payload.data)
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
        post.desc=desc
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
        state.status = 'succeeded'
        const post=state.posts.find(post=>post.id===action.payload.post_id)
 
        post.likes.push(action.payload.data)
      })
      .addCase(likeAPost.rejected, (state) => {
        state.status = 'failed'
        state.error = `Like a post failed. Please try again later`
      })

      .addCase(unlikeAPost.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(unlikeAPost.fulfilled, (state, action)=>{
        
        const {post_id, like_id} = action.payload
        state.status = 'succeeded'
        const post=state.posts.find(post=>post.id===post_id)
        post.likes=post.likes.filter(like=>like.id!==like_id)
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
  }
})

// Action creators are generated for each case reducer function
export const { postAdded, postsFetched } = postsSlice.actions

export default postsSlice.reducer
export const selectAllPosts = (state) =>{
 
  return state.posts.posts
} 
export const selectPostsbyUserId = (state, userId) =>{
 
 
  return state.posts.posts.filter(post=>post.owner_id===userId)
} 
export const selectPostbyId = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId)
}
export const likedByUserId = (state, postId) => {
 
  const post = state.posts.posts.find(p=>p.id===postId)
  const userId=state.user.currentUserId
 
  return post.likes.find(l=>l.user_id === userId) ? true : false
}

