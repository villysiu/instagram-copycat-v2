// import { useState } from 'react';
import Header from './features/Header';
import './App.css';
import { useState, useEffect } from 'react';
import { getUser } from './app/actions';

function App() {
  const [user, setUser]=useState(null)
   const [loading, setLoading] = useState(true)
    const setUserCB=(userInfo)=>{
        console.log(userInfo)
        setUser(userInfo)
        
    }
 
  useEffect(()=>{
    getUser(setUserCB)
    setLoading(false)
  },[])
  if(loading)
   return <h1>Loading</h1>
  return (
    <div className="App">
      <header className="App-header">
        <Header user={user} setUserCB={setUserCB} />
        <br/><br/><br/><br/><br/><br/>
        Hello {user && user.name}!
      </header>
    </div>
  );
}

export default App;
