import { useState } from 'react';
import Header from './features/Header';
import './App.css';

function App() {
  const [login, setLogin]= useState(false)
  // const [loading, setLoading] = useState(true)
  
  return (
    <div className="App">
      <header className="App-header">
        <Header login={login}/>
       
      </header>
    </div>
  );
}

export default App;
