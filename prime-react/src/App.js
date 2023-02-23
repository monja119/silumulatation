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
      userData: null,
      userType: null
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
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://c8f3-154-126-79-169.eu.ngrok.io/get_account_type/', true);
        xhr2.withCredentials = true;
        xhr2.onload = () => {
            
            const userData = JSON.parse(xhr.responseText);
            this.setState({ userType });
            
        }
        xhr2.send();
  }
  render() {
    const { userData } = this.state;
    const { userType } = this.state;
        if (!userData && !userType) {
            return <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary" />
          </div>; // Ou un autre élément d'affichage pendant le chargement
        }
        console.log(userData, userType)
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

