import React, { Component } from 'react';
import './App.css';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Principale from './components/Principale/Principale';
import Forum from './components/Forum/Forum';
import GetDataForum from './Datas/GetDataForum';

class App extends Component {

  constructor(props)
  {
    super(props)

    this.state = {
      userData: null
    };
  }

  componentDidMount()
  {

        //get UserConnexion Data
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://c8f3-154-126-79-169.eu.ngrok.io/get_connected_user/', true);
        xhr.withCredentials = true;
        xhr.onload = () => {
            
            const userData = JSON.parse(xhr.responseText);
            this.setState({ userData });
            
        }
        xhr.send();
  }
  render() {
    const { userData } = this.state;
        if (!userData) {
            return <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary" />
          </div>; // Ou un autre élément d'affichage pendant le chargement
        }
        console.log(userData)
        if(userData.id === undefined || userData.id === null)
        {
          return (
            <BrowserRouter>
              <Routes>
                <Route path='/'>
                  <Route index element={<Login />} />
                  <Route path='login' element={<Login />} />
                  <Route path='*' element={<Error />} />
                </Route>
              </Routes>
            </BrowserRouter>
          );
        }
        else 
        {
          return (<BrowserRouter>
              <Routes>
                <Route path='/'>
                  <Route index element={<Principale />} />
                  <Route path='forum' element={<Forum />} />
                  <Route path='login' element={<Login />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='forum/data' element={<GetDataForum />} />
                  <Route path='*' element={<Error />} />
                </Route>
              </Routes>
            </BrowserRouter>)
        }
    
  }
}

export default App;

