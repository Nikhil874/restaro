import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Mainpage } from './components/mainPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
   <Navbar/>
    <Mainpage/>
    </div>
  )
}

export default App
