import './App.css'
import Discover from './views/main/Discover'
import SignIn from './views/registration/SignIn'
import { Routes, Route } from 'react-router-dom'
import SignUp from './views/registration/SignUp'
import Profile from './views/profile/Profile'
import Support from './views/support/Support'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Support" element={<Support />} />
      </Routes>
    </>
   )
}

export default App