import Reach from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p>Welcome to Happy Family Friends</p>
      </header>
    </div>
  )
}

export default App
