import { useEffect } from 'react';
import Header from './features/Header';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './features/user/userSlice'; 
import { currentUser } from './features/user/userSlice';
import PostList from './features/posts/PostList';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(currentUser)
  const userStatus = useSelector(state => state.user.status)
  const error = useSelector(state => state.user.error)

  useEffect(() => {
    if (userStatus === 'idle') {
        dispatch(fetchUser())
    }
}, [userStatus, dispatch])

  if (userStatus === 'loading') 
    return <h1>Loading</h1>
  if (userStatus === 'failed')
    return <div>{error}</div>

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <br/><br/><br/><br/><br/><br/>
        Hello {user && user.user.name}!
       
        <PostList />
      </header>
    </div>
  );
}

export default App;
