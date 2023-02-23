import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Principale from "./components/Principale/Principale"

function App() {


  return <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Login />}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="home" element={<Principale/>}></Route>
            <Route path="*" element={<Error/>}></Route>

          </Route>
      </Routes>
      
  </BrowserRouter>
}

export default App;
