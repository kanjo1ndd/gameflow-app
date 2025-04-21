import './App.css'
import Discover from './views/main/Discover'
import SignIn from './views/registration/SignIn'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
