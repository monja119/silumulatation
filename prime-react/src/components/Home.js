import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

class Home extends Component 
{

    constructor(props) {
        super(props)
    }

    render()
    {
        return (<div>
            <Navbar />
            <Header />
            <div className="container">
              <p>Contenu de la page</p>
            </div>
            <Footer />
          </div>)
    }

}

export default Home;

