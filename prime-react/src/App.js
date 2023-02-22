import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return <BrowserRouter>
      <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="signup" element={<Signup/>}></Route>
          </Route>
      </Routes>
      
  </BrowserRouter>
}

export default App;
