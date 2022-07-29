import React,{useState} from 'react'
import Login from './components/Login'
import Header from './components/Header';


function App() {
 

  const [token] = useState(localStorage.getItem("awesomeLeadsToken"))


  return (
    <div>
      {!token ? (<Login/>):(<Header/>)}
      
    </div>
  )
}

export default App