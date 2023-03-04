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
        // status: response.status,
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
        throw new Error(response)
      }
     return {
      data,
     }
    }catch(error){
     
      console.log(error.message.response)
      // console.log(error)
      // return Promise.reject(error.message ? error.message : "no data")
      return Promise.reject(error)
    }
  }
)
export const editAPost = createAsyncThunk(
    'posts/editAPost',
    async({postId, formData})=>{
      console.log(postId)
      // console.log(formData)
      try{
        const response=await fetch(`${url}/photos/${postId}`, {
          // const response=await fetch(`${url}/photos/1000`, {
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
          postId,
          desc: formData.get("desc"),
        }
      } catch (error) {
          return Promise.reject(error.message ? error.message : "no data")
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
    if(!response.ok) throw new Error(response.statusText)
    return {
      postId
    }
    } catch (error) {
      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)
export const likeAPost = createAsyncThunk(
  'posts/likeAPost',
  async (post_id)=>{
    console.log("like a post "+ post_id)
    try {
      //`http://localhost:3000/photos/${photo_id}/likes`
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
        throw new Error(response.statusText)
      return {
        post_id,
        data
        
      }
    } catch (error) {
      return Promise.reject(error.message ? error.message : "no data")
    }
  }
)
export const unlikeAPost = createAsyncThunk(
  'posts/unlikeAPost',
  async ({post_id}) =>{
    // console.log(post_id, liked_id)
    try {
      //http://localhost:3000/photos/${photo_id}/likes/${liked_id}`
      // const response=await fetch(`${url}/photos/${post_id}/likes/${liked_id}`, {
        const response=await fetch(`${url}/photos/${post_id}/likes`, {
        method: "delete",
        headers: {
            'Content-type': "application/json",
            'Authorization': localStorage.getItem('token'),
        },
      })
      const data=await response.json()
      if(!response.ok) 
        throw new Error(response.statusText)
    
      console.log(data)
      return {
        post_id: post_id,
        like_id: data,
      }

    } catch (error) {
      // console.log("i m here")
      return Promise.reject(error.message ? error.message : "no data")
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
        throw new Error(response.statusText)
      return {
        postId: postId,
        data,
      }
    } catch (error) {
      return Promise.reject(error.message ? error.message : "no data")
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
        console.log(action)
        state.status = 'succeeded'
        state.posts = state.posts.concat(action.payload.data)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        console.log(state)
        console.log(action)
        state.status = 'succeeded'
        state.posts.unshift(action.payload.data)
      })
      .addCase(addNewPost.rejected, (state, action) => {
        console.log(action)
        console.log(state)
        state.status = 'failed'
        state.error = "logged out"
        localStorage.clear()
        window.location.reload()
      })
      .addCase(editAPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(editAPost.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'succeeded'
        const {postId, desc} = action.payload
        console.log( desc)
        const post=state.posts.find(post=>post.id===postId)
        post.desc=desc
        
      })
      .addCase(editAPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        localStorage.clear()
        window.location.reload()
      })
      .addCase(deleteAPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(deleteAPost.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'succeeded'
        state.posts=state.posts.filter(post=>post.id!==action.payload.postId)
        
        
      })
      .addCase(deleteAPost.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        localStorage.clear()
        window.location.reload()
      })
      .addCase(likeAPost.fulfilled, (state, action)=>{
        state.status = 'succeeded'
        const post=state.posts.find(post=>post.id===action.payload.post_id)
        console.log(post)
        post.likes.push(action.payload.data)
      })
      .addCase(unlikeAPost.fulfilled, (state, action)=>{
        console.log(action)
        const {post_id, like_id} = action.payload
        state.status = 'succeeded'
        const post=state.posts.find(post=>post.id===post_id)
        
        post.likes=post.likes.filter(like=>like.id!==like_id)
      })
      .addCase(addComment.fulfilled, (state, action)=>{
        console.log(action.payload)
        state.status = 'succeeded'
        const post=state.posts.find(post=>post.id===action.payload.postId)
        console.log(post)
        post.comments.push(action.payload.data)
      })
  }
})

// Action creators are generated for each case reducer function
export const { postAdded, postsFetched } = postsSlice.actions

export default postsSlice.reducer
export const selectAllPosts = (state) =>{
  // console.log(state)
  return state.posts.posts
} 
export const selectPostsbyUserId = (state, userId) =>{
  console.log(state)
  console.log(userId)
  return state.posts.posts.filter(post=>post.owner_id===userId)
} 
export const selectPostbyId = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId)
}
export const likedByUserId = (state, postId) => {
  console.log(state)
  const post = state.posts.posts.find(p=>p.id===postId)
  const userId=state.user.currentUserId
  console.log(userId)
  return post.likes.find(l=>l.user_id === userId) ? true : false
}

