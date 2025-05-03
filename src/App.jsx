import './App.css'
import Discover from './views/main/Discover'
import SignIn from './views/registration/SignIn'
import { Routes, Route, Router } from 'react-router-dom'
import SignUp from './views/registration/SignUp'
import Profile from './views/profile/Profile'
import Support from './views/support/Support'
import WishList from './views/wishlist/WishList'
import { AppContext } from './AppContext'
import { useState } from 'react'

function App() {

  const [token, setToken] = useState(null);

  // добавил подключение к бекенду. порт не забудьте поменять только =)
  const request = (url, conf) => new Promise((resolve, reject) => {
    if(url.startsWith("/")){
        url = "https://localhost:5258" + url; 
    }
    if(token != null){
      if(typeof conf == 'undefined'){
        conf = {};
      }
      if(typeof conf['headers'] == 'undefined'){
        conf['headers'] = {};
      }
      if(typeof conf['headers']['Authorization'] == 'undefined') {
        conf['headers']['Authorization'] = 'Bearer ' + token;
      }
    }
    fetch(url, conf)
    .then(r => r.json())
    .then(j => {
        if(j.status.isOk) {
            resolve(j.data);
        }
        else {
            reject(j);
        }
    });
  });

  return (
      <AppContext.Provider value={{request, token, setToken}}>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/WishList" element={<WishList />} />
        </Routes>
      </AppContext.Provider>
   )
}

export default App