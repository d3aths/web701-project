import Reach from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Register from './components/register'
import Homepage from './components/homepage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </header>
    </div>
  )
}

export default App
