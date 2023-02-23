import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Principale from "./components/Principale/Principale";
import Forum from './components/Forum/Forum';
import GetDataForum from './Datas/GetDataForum';
function App() {


  return <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Login />}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="forum" element={<Forum/>}></Route>
            <Route path="profile" element={<Profile/>}></Route>
            <Route path="home" element={<Principale/>}></Route>
            <Route path="forum/data" element={<GetDataForum/>}></Route>
            <Route path="*" element={<Error/>}></Route>

          </Route>
      </Routes>
      
  </BrowserRouter>
}

export default App;
