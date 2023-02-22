import React, { Component } from 'react';

class Footer extends Component 
{

    constructor(props) {
        super(props)
    }

    render()
    {
        return (<footer className="bg-light text-center py-3">
        <p>Tous droits réservés &copy; 2023 Mon site</p>
      </footer>)
    }

}

export default Footer;