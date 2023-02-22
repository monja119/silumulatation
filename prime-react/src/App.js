import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Error from './components/Error';
import GetDataUser from './Datas/getData_User';

function App() {


  return <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="register" element={<Signup/>}></Route>
            <Route path="userAffichage" element={<GetDataUser/>}></Route>
            <Route path="*" element={<Error/>}></Route>

          </Route>
      </Routes>
      
  </BrowserRouter>
}

export default App;
