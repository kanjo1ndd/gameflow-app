import './App.css'
import Discover from './views/main/Discover'
import SignIn from './views/registration/SignIn'
import { Routes, Route } from 'react-router-dom'
import SignUp from './views/registration/SignUp'
import Profile from './views/profile/Profile'
import Support from './views/support/Support'
import WishList from './views/wishlist/WishList'
import { AppContext } from './AppContext'
import { useState } from 'react'
import EditProfile from './views/profile/editProfile/editProfileContent/EditProfile'
import Category from './views/category/Category'
import MyCart from './views/mycart/MyCart'
import Achievements from './views/achievements/Achievements'

function App() {

  const [token, setToken] = useState(null);

  // добавил подключение к бекенду. порт не забудьте поменять только =)
  const request = (url, conf) => new Promise((resolve, reject) => {
    if(url.startsWith("/")){
        url = "https://localhost:7202" + url; 
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
          <Route path="/Profile/Edit" element={<EditProfile />} />
          <Route path="/Category/:id" element={<Category />} />
          <Route path="/MyCart" element={<MyCart />} />
          <Route path="/Achievements" element={<Achievements />} />
        </Routes>
      </AppContext.Provider>
   )
}

export default App