import './App.css'
import Discover from './views/main/Discover'
import SignIn from './views/registration/SignIn'
import { Routes, Route, Router } from 'react-router-dom'
import SignUp from './views/registration/SignUp'
import { AppContext } from './AppContext'

function App() {

  // добавил подключение к бекенду. порт не забудьте поменять только =)
  const request = (url, conf) => new Promise((resolve, reject) => {
    if(url.startsWith("/")){
        url = "http://localhost:5258" + url; 
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
    <AppContext.Provider value={{request}}>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </AppContext.Provider>
   )
}

export default App
